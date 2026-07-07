import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['../app.css']
})
export class HomeComponent {
  readonly highlights = [
    '23+ years of global MEP delivery',
    '100+ projects across commercial and industrial sectors',
    'Specialized HVAC, electrical, plumbing and fire systems'
  ];
}
