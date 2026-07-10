import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  readonly partnerItems = [
    'HAL-KO Infraprojects',
    'Gurudev Funicular Ropeways',
    'Della Group',
    'JSM',
    'MALK Architecture',
    'Goregaon Sports Club',
    'CLaY',
    'Parle',
    'Radisson Hotels & Resorts',
    'Aakruti Designs & Co.',
    'Studio SP',
    'Chemito',
    'CarTradeTech',
    'RHF',
    'Sugee',
    'Wallace Pharmaceuticals',
    'UCO Bank',
    'Bajaj',
  ];
}
