import { Component, HostListener } from '@angular/core';
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
  activeLink = '#home';

  readonly navLinks = [
    { label: 'Home', path: '#home', icon: null },
    { label: 'About Us', path: '#about', icon: null },
    { label: 'Services', path: '#services', icon: null },
    { label: 'Our Projects', path: '#projects', icon: null },
    { label: 'Our Partners', path: '#partners', icon: null },
    { label: 'Career', path: '#career', icon: '💼', highlight: true },
    { label: 'Contact', path: '#contact', icon: '📞', highlight: true }
  ];

  selectLink(path: string): void {
    this.activeLink = path;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveLinkOnScroll();
  }

  private updateActiveLinkOnScroll(): void {
    const sectionElements = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    if (!sectionElements.length) {
      return;
    }

    const topThreshold = Math.max(window.innerHeight * 0.2, 120);
    let currentActive = this.activeLink;
    let closestSection: HTMLElement | null = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (const section of sectionElements) {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - topThreshold);
      if (rect.top <= topThreshold && distance < closestDistance) {
        closestSection = section;
        closestDistance = distance;
      }
    }

    if (closestSection) {
      currentActive = `#${closestSection.id}`;
    }

    if (this.activeLink !== currentActive) {
      this.activeLink = currentActive;
    }
  }
}
