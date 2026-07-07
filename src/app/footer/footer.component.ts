import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="footer-top page-shell">
        <div class="footer-brand">
          <a class="footer-logo" href="#top">MEPTEQ</a>
          <p>
            MepTeq specializes in high-quality HVAC, plumbing, electrical, and fire protection solutions for residential, commercial, and industrial projects.
          </p>
          <div class="brand-accent"></div>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-contact-panel">
          <h4>Contact</h4>
          <p>dhake9322@gmail.com</p>
          <p>+91 7798097620</p>
          <p>Mumbai · Bangalore</p>
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
