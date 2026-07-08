import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./contact.component.css'],
  template: `
    <section id="contact" class="contact-section page-section">
      <div class="section-head">
        <span class="section-label">GET IN TOUCH</span>
        <h2>Ready to discuss your next project?</h2>
      </div>

      <div class="contact-grid">
        <div class="contact-form-card">
          <h3>Send Us a Message</h3>
          <form class="contact-form" autocomplete="off">
            <div class="field-row">
              <input type="text" placeholder="Your Name *" aria-label="Your name" />
              <input type="email" placeholder="Your Email *" aria-label="Your email" />
            </div>
            <div class="field-row">
              <input type="tel" placeholder="Phone Number" aria-label="Phone number" />
              <input type="text" placeholder="Subject" aria-label="Subject" />
            </div>
            <textarea placeholder="Your Message *" aria-label="Your message"></textarea>
            <button type="button" class="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div class="contact-info-card">
          <h3>Contact Information</h3>
          <div class="contact-info-list">
            <div class="contact-info-item">
              <strong>Mumbai Office</strong>
              <p>A-101, Kiran Kunj CHS, Dombivli,<br />Thane, Maharashtra</p>
            </div>
            <div class="contact-info-item">
              <strong>Bangalore Office</strong>
              <p>G M Infinite Daffodils,<br />Hessaragatta Road, Jalhalli, Bangalore</p>
            </div>
            <div class="contact-info-item">
              <strong>Phone</strong>
              <p>+91 7798097620</p>
            </div>
            <div class="contact-info-item">
              <strong>Email</strong>
              <p>dhake9322@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}
