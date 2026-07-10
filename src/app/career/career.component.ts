import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

interface CareerOpening {
  icon: string;
  title: string;
  accent: string;
  summary: string;
  requirements: string[];
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  readonly openings: CareerOpening[] = [
    {
      icon: '⚙',
      title: 'Mechanical Draftsmen',
      accent: '#2f80ed',
      summary: 'Create detailed technical drawings and coordinated blueprints for HVAC, plumbing and other mechanical building systems.',
      requirements: ['AutoCAD Proficiency', '2+ Years Experience', 'Technical Drawing Skills', 'Attention to Detail']
    },
    {
      icon: '⚡',
      title: 'Electrical Draftsmen',
      accent: '#ff8a00',
      summary: 'Design electrical schematics and layout packages for complex building projects with accurate documentation support.',
      requirements: ['Electrical CAD', '3+ Years Experience', 'Circuit Design', 'Code Knowledge']
    }
  ];

  selectedOpening: CareerOpening | null = null;
  isSubmitting = false;
  submissionError = '';
  submissionNote = '';

  readonly applicationForm = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    emailAddress: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phoneNumber: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }),
    yearsOfExperience: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    motivation: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] })
  });

  constructor(private readonly http: HttpClient) {}

  openApplication(opening: CareerOpening): void {
    this.selectedOpening = opening;
    this.submissionError = '';
    this.submissionNote = '';
    this.applicationForm.reset({
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
      yearsOfExperience: '',
      motivation: ''
    });
  }

  closeApplication(): void {
    this.selectedOpening = null;
    this.isSubmitting = false;
  }

  isInvalid(controlName: keyof typeof this.applicationForm.controls): boolean {
    const control = this.applicationForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  async submitApplication(): Promise<void> {
    if (!this.selectedOpening) {
      return;
    }

    if (this.applicationForm.invalid) {
      this.applicationForm.markAllAsTouched();
      return;
    }

    const value = this.applicationForm.getRawValue();
    this.isSubmitting = true;
    this.submissionError = '';
    this.submissionNote = '';

    try {
      await firstValueFrom(
        this.http.post('/api/career-applications', {
          position: this.selectedOpening.title,
          fullName: value.fullName,
          emailAddress: value.emailAddress,
          phoneNumber: value.phoneNumber,
          yearsOfExperience: value.yearsOfExperience,
          motivation: value.motivation
        })
      );

      this.submissionNote = 'Application sent successfully.';
      this.applicationForm.reset({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        yearsOfExperience: '',
        motivation: ''
      });
    } catch {
      this.submissionError = 'Unable to send email right now. Please check server SMTP configuration.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
