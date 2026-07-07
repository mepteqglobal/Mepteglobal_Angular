import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="partners-section page-section">
      <div class="section-head partners-head">
        <span class="section-label light-label">OUR TRUSTED PARTNERS</span>
        <h2>Partnering with brands that rely on dependable engineering.</h2>
      </div>

      <div class="partner-grid">
        <div class="partner-card" *ngFor="let p of partnerItems">{{ p }}</div>
      </div>
    </section>
  `
})
export class PartnersComponent {
  readonly partnerItems = [
    'Wallace',
    'Parle',
    'RHF',
    'CarTrade',
    'Radisson Blu',
    'Sugee',
    'JSM',
    'Rajini'
  ];
}
