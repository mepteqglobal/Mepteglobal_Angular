import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

// ── EmailJS configuration ──────────────────────────────────────────────────
// Use the SAME Service ID and Public Key as the career form.
// Create a separate Contact template on EmailJS with these variables:
//   {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
// Set "To Email" to dhake9322@gmail.com (or harshaldhake21@gmail.com) in the template.
const EMAILJS_SERVICE_ID       = 'YOUR_SERVICE_ID';            // e.g. 'service_xxxxxxx'
const EMAILJS_CONTACT_TEMPLATE = 'YOUR_CONTACT_TEMPLATE_ID';  // e.g. 'template_yyyyyyy'
const EMAILJS_PUBLIC_KEY       = 'YOUR_PUBLIC_KEY';            // e.g. 'abcXYZ123...'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isSubmitting = false;
  submissionNote = '';
  submissionError = '';

  readonly contactForm = new FormGroup({
    fromName:  new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    fromEmail: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone:     new FormControl('', { nonNullable: true }),
    subject:   new FormControl('', { nonNullable: true }),
    message:   new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
  });

  isInvalid(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  async sendMessage(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const value = this.contactForm.getRawValue();
    this.isSubmitting = true;
    this.submissionNote = '';
    this.submissionError = '';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE,
        {
          from_name:  value.fromName,
          from_email: value.fromEmail,
          phone:      value.phone,
          subject:    value.subject,
          message:    value.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      this.submissionNote = 'Message sent successfully! We will get back to you shortly.';
      this.contactForm.reset();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message
        : (typeof error === 'object' && error !== null && 'text' in error)
          ? String((error as { text: unknown }).text)
          : 'Unknown error';
      console.error('EmailJS contact error:', error);
      this.submissionError = `Unable to send message: ${msg}`;
    } finally {
      this.isSubmitting = false;
    }
  }
}
