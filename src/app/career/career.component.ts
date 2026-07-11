import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

// ── EmailJS configuration ──────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com/
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID below.
// 3. Create an Email Template with these variables:
//      {{position}}, {{full_name}}, {{email_address}},
//      {{phone_number}}, {{years_of_experience}}, {{motivation}}
//    Set "To Email" to harshaldhake21@gmail.com in the template.
// 4. Copy the Template ID and your Public Key (Account → API Keys) below.
const EMAILJS_SERVICE_ID  = 'service_xn9eyaq';   // e.g. 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_c2is87j';  // e.g. 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY  = 'iFiIJsL8mCYJ4evCI';   // e.g. 'abcXYZ123...'

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

  constructor() {}

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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          position:            this.selectedOpening.title,
          full_name:           value.fullName,
          email_address:       value.emailAddress,
          phone_number:        value.phoneNumber,
          years_of_experience: value.yearsOfExperience,
          motivation:          value.motivation,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      this.submissionNote = 'Application sent successfully.';
      this.applicationForm.reset({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        yearsOfExperience: '',
        motivation: ''
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message
        : (typeof error === 'object' && error !== null && 'text' in error)
          ? String((error as { text: unknown }).text)
          : 'Unknown error';
      console.error('EmailJS error:', error);
      this.submissionError = `Unable to send application: ${msg}`;
    } finally {
      this.isSubmitting = false;
    }
  }
}
