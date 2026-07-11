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
    { name: 'HAL-KO Infraprojects', logo: '' },
    { name: 'Gurudev Funicular Ropeways', logo: '' },
    { name: 'Della Group', logo: '' },
    { name: 'JSM', logo: '' },
    { name: 'MALK Architecture', logo: '' },
    { name: 'Goregaon Sports Club', logo: 'assets/images/Goregaon Sports Club (GSC).png' },
    { name: 'CLaY', logo: '' },
    { name: 'Parle', logo: '' },
    { name: 'Radisson Hotels & Resorts', logo: 'assets/images/Free to Fly Club Radisson Hotel, Goa.jpg' },
    { name: 'Aakruti Designs & Co.', logo: '' },
    { name: 'Studio SP', logo: '' },
    { name: 'Chemito', logo: '' },
    { name: 'CarTradeTech', logo: '' },
    { name: 'RHF', logo: '' },
    { name: 'Sugee', logo: '' },
    { name: 'Wallace Pharmaceuticals', logo: 'assets/images/Wallace Pharmaceutical HQ, Andheri.jpeg' },
    { name: 'UCO Bank', logo: '' },
    { name: 'Bajaj', logo: '' },
  ];
}
