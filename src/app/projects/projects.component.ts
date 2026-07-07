import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section page-section">
      <div class="section-head">
        <span class="section-label">OUR PROJECTS</span>
        <h2>Selected engineering and construction portfolios.</h2>
      </div>

      <div class="project-grid">
        <article class="project-card" *ngFor="let p of projectItems">
          <img [src]="p.image" [alt]="p.title" />
          <div class="project-overlay">
            <h3>{{ p.title }}</h3>
          </div>
        </article>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly projectItems = [
    { title: 'Commercial Complex', image: 'assets/images/project-commercial.svg' },
    { title: 'Restaurant Interior', image: 'assets/images/project-restaurant.svg' },
    { title: 'Retail Building', image: 'assets/images/project-retail.svg' },
    { title: 'High-rise Tower', image: 'assets/images/project-highrise.svg' },
    { title: 'Luxury Villas', image: 'assets/images/project-luxury.svg' },
    { title: 'Modern Residence', image: 'assets/images/project-modern.svg' },
    { title: 'Mixed Use Property', image: 'assets/images/project-mixed.svg' },
    { title: 'Industrial Hall', image: 'assets/images/project-industrial.svg' },
    { title: 'Landscape Project', image: 'assets/images/project-landscape.svg' }
  ];
}
