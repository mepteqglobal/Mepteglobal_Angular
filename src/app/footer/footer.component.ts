import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-top page-shell">
        <div class="footer-brand">
          <a class="footer-logo" routerLink="/">MEPTEQ</a>
          <p>
            MepTeq specializes in high-quality HVAC, plumbing, electrical, and fire protection solutions for residential, commercial, and industrial projects.
          </p>
          <div class="brand-accent"></div>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="footer-social-panel">
          <h4>Follow Us</h4>
          <div class="footer-socials">
            <a class="social facebook" href="#" aria-label="Facebook">f</a>
            <a class="social twitter" href="#" aria-label="Twitter">t</a>
            <a class="social linkedin" href="#" aria-label="LinkedIn">in</a>
            <a class="social instagram" href="#" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom page-shell">
        <span>© 2026 Mepteq.com | All rights reserved.</span>
      </div>
    </footer>
  `
})
export class FooterComponent {}
