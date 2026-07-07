import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, AboutComponent, ProjectsComponent, PartnersComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  menuOpen = false;

  readonly navLinks = [
    { label: 'Home', path: '#home' },
    { label: 'About Us', path: '#about' },
    { label: 'Our Projects', path: '#projects' },
    { label: 'Our Partners', path: '#partners' },
    { label: 'Contact', path: '#contact' }
  ];

  trackByLabel(index: number, item: { label: string }): string {
    return item.label;
  }
}
