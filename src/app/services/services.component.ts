import { Component } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from '@angular/common';

interface ServiceCapability {
  icon: string;
  title: string;
  accent: string;
}

interface ServiceVisual {
  eyebrow: string;
  title: string;
  summary: string;
  theme: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  description: string;
  capabilities: ServiceCapability[];
  visuals: ServiceVisual[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NgForOf, NgClass],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  readonly offeredLeft = [
    { num: '01', title: 'Advanced HVAC System',        bg: 'rgba(196,181,253,0.12)', accent: '#7c3aed' },
    { num: '02', title: 'Electrical HT LT',             bg: 'rgba(252,165,165,0.12)', accent: '#ef4444' },
    { num: '03', title: 'Extra Low Voltage Services',  bg: 'rgba(94,234,212,0.12)',  accent: '#0d9488' },
    { num: '04', title: 'Sustainable Plumbing',        bg: 'rgba(253,224,71,0.12)',  accent: '#ca8a04' },
  ];

  readonly offeredRight = [
    { num: '05', title: 'Master Planning for Large Infrastructure', bg: 'rgba(253,224,71,0.12)',  accent: '#ca8a04' },
    { num: '06', title: 'Design of Fire Fighting & Detection',      bg: 'rgba(94,234,212,0.12)',  accent: '#0d9488' },
    { num: '07', title: 'Peer Review of Third-Party Design',        bg: 'rgba(252,165,165,0.12)', accent: '#ef4444' },
    { num: '08', title: 'Building Management System',               bg: 'rgba(196,181,253,0.12)', accent: '#7c3aed' },
  ];

  readonly timelineItems = [
    {
      num: 1, color: '#1e3a5f', title: 'Expertise',
      text: 'Over 23 years delivering <strong>comprehensive MEP solutions</strong> worldwide with technical excellence and global compliance.'
    },
    {
      num: 2, color: '#06b6d4', title: 'Portfolio',
      text: 'Involved in 500+ projects across pharmaceuticals, hotels, villas, and towers, showing <strong>versatility and sector knowledge</strong>.'
    },
    {
      num: 3, color: '#eab308', title: 'Flagship',
      text: 'Projects like <strong>Burj Khalifa, Weatherford Oils & Tools, Abu-Dhabi</strong> and Radisson Hotels highlight ability to manage complex, high-profile developments.'
    },
    {
      num: 4, color: '#4b6282', title: 'Services',
      text: 'Specialized in MEP audits and rectification, ensuring <strong>operational efficiency</strong> and system optimization for facilities.'
    },
    {
      num: 5, color: '#1e3a5f', title: 'Versatility',
      text: 'Proven across commercial, residential, hospitality, and industrial sectors, adapting MEP designs to varied needs.'
    },
  ];

  collapsedCategories = new Set<string>();

  toggleCategory(title: string) {
    if (this.collapsedCategories.has(title)) {
      this.collapsedCategories.delete(title);
    } else {
      this.collapsedCategories.add(title);
    }
  }

  isCollapsed(title: string) {
    return this.collapsedCategories.has(title);
  }

  readonly serviceCategories: ServiceCategory[] = [
    {
      title: 'Plumbing & Fire Protection',
      subtitle: 'Integrated water, drainage and safety infrastructure.',
      description: 'Complete plumbing and fire protection solutions covering distribution networks, treatment systems and life-safety installations for commercial, residential and industrial facilities.',
      capabilities: [
        { icon: '💧', title: 'Water Supply', accent: '#2491ff' },
        { icon: '🌀', title: 'Drainage & Sewerage', accent: '#4154d8' },
        { icon: '🚰', title: 'Building Plumbing', accent: '#7c4dff' },
        { icon: '🧪', title: 'Water Filtration', accent: '#0f9d8d' },
        { icon: '♻', title: 'Waste Water Treatment', accent: '#23b1ff' },
        { icon: '⚗', title: 'RO Plant', accent: '#4caf50' },
        { icon: '🔥', title: 'Gas Distribution', accent: '#f44336' }
      ],
      visuals: [
        {
          eyebrow: 'Hydraulic Networks',
          title: 'Distribution Piping Systems',
          summary: 'Coordinated supply, return and service pipe layouts for efficient building performance.',
          theme: 'pipes'
        },
        {
          eyebrow: 'Life Safety',
          title: 'Fire Protection Coverage',
          summary: 'Sprinkler, hydrant and extinguishing systems designed for rapid response and code compliance.',
          theme: 'fire'
        },
        {
          eyebrow: 'Fixtures & Fittings',
          title: 'Building Plumbing Interfaces',
          summary: 'Smart fixture coordination for utility areas, washrooms and process installations.',
          theme: 'fixtures'
        }
      ]
    },
    {
      title: 'Electrical & ELV System',
      subtitle: 'Power, controls and low-voltage intelligence in one package.',
      description: 'End-to-end electrical and ELV engineering for resilient power distribution, safety systems, communications and building monitoring environments.',
      capabilities: [
        { icon: '💡', title: 'Lighting Distribution', accent: '#2f7de1' },
        { icon: '⚡', title: 'Power Distribution', accent: '#2166d1' },
        { icon: '🔋', title: 'Power Generation Systems', accent: '#2c8cff' },
        { icon: '❄', title: 'Chilled Water Systems', accent: '#3483eb' },
        { icon: '🚨', title: 'Fire & Security Alarm System', accent: '#e24a4a' },
        { icon: '📡', title: 'Communication system', accent: '#43a047' },
        { icon: '📹', title: 'CCTV', accent: '#1f8ddb' }
      ],
      visuals: [
        {
          eyebrow: 'Electrical Rooms',
          title: 'Control Panels & Distribution Boards',
          summary: 'Switchgear, monitoring and load management solutions for stable operations.',
          theme: 'panels'
        },
        {
          eyebrow: 'Connected Buildings',
          title: 'ELV Infrastructure Integration',
          summary: 'Access control, structured cabling, PA systems and smart-device coordination.',
          theme: 'elv'
        },
        {
          eyebrow: 'Security Layer',
          title: 'Monitoring & Access Systems',
          summary: 'Alarm, surveillance and interface points built around occupant safety and control.',
          theme: 'security'
        }
      ]
    },
    {
      title: 'HVAC Services',
      subtitle: 'Thermal comfort engineered for performance and efficiency.',
      description: 'Specialized HVAC design and execution support for cooling, air distribution and energy-efficient systems tuned to diverse building typologies.',
      capabilities: [
        { icon: '🧊', title: 'Specialized Air-Conditioning', accent: '#2b7de9' },
        { icon: '🌀', title: 'Variable Refrigerant Volume (VRV)', accent: '#2e6ed8' },
        { icon: '🏢', title: 'Central Air-Conditioning', accent: '#2e7be5' },
        { icon: '❄', title: 'Chilled Water Systems', accent: '#3a86ff' },
        { icon: '🌿', title: 'Energy-Efficient Solutions', accent: '#ef4444' }
      ],
      visuals: [
        {
          eyebrow: 'Exterior Equipment',
          title: 'Air-Cooled System Arrays',
          summary: 'Packaged outdoor equipment coordination for stable and responsive cooling delivery.',
          theme: 'cooling'
        },
        {
          eyebrow: 'Central Plant',
          title: 'High-Capacity HVAC Networks',
          summary: 'Plantroom-scale cooling infrastructure for large campuses and complex facilities.',
          theme: 'plant'
        },
        {
          eyebrow: 'Optimized Comfort',
          title: 'Energy-Conscious Air Distribution',
          summary: 'Balanced thermal control strategies that improve comfort while reducing operating costs.',
          theme: 'efficiency'
        }
      ]
    }
  ];
}
