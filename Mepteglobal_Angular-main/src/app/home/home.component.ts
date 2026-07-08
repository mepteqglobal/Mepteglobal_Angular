import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  label: string;
}

interface Service {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly highlights = [
    '23+ Years of Global Engineering Experience',
    'Commercial, Residential & Industrial Projects',
    'HVAC • Plumbing • Electrical • Fire Protection'
  ];

  readonly stats: Stat[] = [
    {
      value: '23+',
      label: 'Years Experience'
    },
    {
      value: '100+',
      label: 'Projects Completed'
    },
    {
      value: '3',
      label: 'Countries Served'
    },
    {
      value: '24/7',
      label: 'Engineering Support'
    }
  ];

  readonly services: Service[] = [
    {
      icon: '❄️',
      title: 'HVAC Design'
    },
    {
      icon: '⚡',
      title: 'Electrical Systems'
    },
    {
      icon: '🚰',
      title: 'Plumbing'
    },
    {
      icon: '🔥',
      title: 'Fire Protection'
    },
    {
      icon: '🏗️',
      title: 'MEP Consultancy'
    },
    {
      icon: '📐',
      title: 'Engineering Design'
    }
  ];

}