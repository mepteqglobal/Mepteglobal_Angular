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
    { name: 'HAL-KO Infraprojects', logo: 'assets/images/HAL-KO_Infraprojects.jpg' },
    { name: 'Della Group', logo: 'assets/images/Della_Group.jpg' },  
    { name: 'MALK Architecture', logo: 'assets/images/MALK_Architecture.jpg' },
    { name: 'Goregaon Sports Club', logo: 'assets/images/Goregaon_Sports_Club.jpg' }, 
    { name: 'Parle', logo: 'assets/images/Parle.jpg' },
    { name: 'Aakruti Designs & Co.', logo: 'assets/images/Aakruti_Designs_and_Co.png' },
    { name: 'Chemito', logo: 'assets/images/Chemito.jpg' },
    { name: 'CarTradeTech', logo: 'assets/images/CarTradeTech.svg' },
    { name: 'Sugee', logo: 'assets/images/Sugee.png' },
    { name: 'Wallace Pharmaceuticals', logo: 'assets/images/Wallace_Pharmaceuticals.jpg' },
    { name: 'UCO Bank', logo: 'assets/images/UCO_Bank.jpg' },
    { name: 'Bajaj', logo: 'assets/images/Bajaj.png' },
  ];
}
