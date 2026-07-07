import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section page-section">
      <div class="section-head">
        <span class="section-label">ABOUT US</span>
        <h2>Engineering solutions for buildings that perform.</h2>
      </div>
      <div class="about-grid">
        <div class="about-image-wrap">
          <div class="about-image-ring">
            <img src="assets/images/founder.svg" alt="Company founder" />
          </div>
        </div>
        <div class="about-copy">
          <p>
            Mepteq Global delivers HVAC, plumbing, electrical and fire protection consulting with a focus on technical clarity,
            coordination and long-term operational performance.
          </p>
          <ul class="about-list">
            <li>End-to-end system design and detailed engineering</li>
            <li>Project review, coordination and value engineering</li>
            <li>Commissioning, inspection and quality assurance</li>
          </ul>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
