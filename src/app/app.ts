import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CareerComponent } from './career/career.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, ServicesComponent, CareerComponent, AboutComponent, ProjectsComponent, PartnersComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  menuOpen = false;

  readonly navLinks = [
    { label: 'Home', path: '#home', icon: null },
    { label: 'About Us', path: '#about', icon: null },
    { label: 'Services', path: '#services', icon: null },
    { label: 'Our Projects', path: '#projects', icon: null },
    { label: 'Our Partners', path: '#partners', icon: null },
    { label: 'Career', path: '#career', icon: '💼', highlight: true },
    { label: 'Contact', path: '#contact', icon: '📞', highlight: true }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
