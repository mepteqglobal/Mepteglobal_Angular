import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeaturedProject {
  title: string;
  image: string;
  description: string;
}

interface Project {
  title: string;
  image: string;
}

interface ProjectCategory {
  name: string;
  tag: string;
  projects: Project[];
}

interface ProjectEntry {
  sn: number;
  name: string;
  location: string;
  details: string;
  architect: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedCategoryTag = 'VILLAS';

  get selectedCategory(): ProjectCategory | undefined {
    return this.projectCategories.find(cat => cat.tag === this.selectedCategoryTag);
  }

  setActiveCategory(tag: string) {
    this.selectedCategoryTag = tag;
  }

  readonly featuredProjects: FeaturedProject[] = [
    {
      title: 'Diu\u2013Ghoghla Ropeway Terminal Project',
      image: 'assets\\images\\Diu–Ghoghla Ropeway Terminal Project.jpg',
      description: 'Mr. Devendra Dhake is serving as the MEP Consultant for the terminal building of the Diu\u2013Ghoghla Beach Cable Car Station, developed by Aadharshila Arkins (India) Pvt. Ltd., part of India\'s first indigenously developed and longest ropeway project. His scope includes complete MEP&FLS design covering HVAC, power distribution, water management, and fire protection systems, with a focus on energy efficiency, operational safety, and sustainability.'
    },
    {
      title: 'Goregaon Sports Club (GSC)',
      image: 'assets\\images\\Goregaon Sports Club (GSC).png',
      description: 'At the Goregaon Sports Club, Mr. Devendra Dhake is presently engaged as the MEP Consultant for the ongoing modernization and capacity enhancement of the existing chilled water plant system. The project involves the detailed design and value engineering of an additional 500 TR chiller, seamlessly integrated with the aging HVAC infrastructure to improve overall system performance, higher reliability, and energy efficiency.'
    }
  ];

  readonly projectList: ProjectEntry[] = [
    { sn:  1, name: 'Diu & Ghoghla Rope Way Terminal Station (India\'s First Longest Rope Way running over two beaches)', location: 'Diu & Ghoghla, Gujarat',    details: 'MEPF Design Consultancy',   architect: 'Adharshila Arkins Pvt Ltd.' },
    { sn:  2, name: '100 Bed Saptrishi Hospital',                                                                        location: 'Lehan, Nepal',               details: 'MEPF Design Consultancy',   architect: 'Asian Super Specialty Hospital' },
    { sn:  3, name: 'Wallace Pharmaceutical, Corporate Office @ Andheri',                                                location: 'Andheri, Mumbai',            details: 'MEPF Design Consultancy',   architect: 'Ar. Sahil Parekh' },
    { sn:  4, name: 'G + 22 Storey Building, LM Realty',                                                                location: 'Bhiwandi, Kalyan',           details: 'MEPF Design Consultancy',   architect: 'L. M. Realty' },
    { sn:  5, name: 'Marina Bay Worli, 45 Storey Building',                                                             location: 'Worli, Mumbai',             details: 'MEPF Design (Amenities & Lobbies)', architect: 'Studio SP' },
    { sn:  6, name: 'Radisson Hotel (Free to Fly Club)',                                                                 location: 'Bagga, Goa',                details: 'MEPF Design Consultancy',   architect: 'TAO' },
    { sn:  7, name: 'Shiro Japanese Resto Lounge',                                                                       location: 'Manyata Tech Park, Bangalore', details: 'MEPF Design Consultancy', architect: 'TAO' },
    { sn:  8, name: '70 Acre Savvy Township at Ahmadabad Jagatpur',                                                     location: 'Jagatpur, Ahmedabad',        details: 'MEPF Design Consultancy',   architect: 'M/s. Savvy Infrastructure Pvt. Ltd.' },
    { sn:  9, name: 'Shapath V – Mixed Use Development (Crown Plaza Hotels + Commercial Retail & Office Space)',         location: 'Ahmedabad, Gujarat',         details: 'Green Building Certified',  architect: 'M/s. Savvy Infrastructure Pvt. Ltd.' },
    { sn: 10, name: 'B+G+7F Commercial Retail & Office Space',                                                          location: 'Ahmedabad, Gujarat',         details: 'MEPF Design Consultancy',   architect: 'Shapath Hexa for Savvy Infrastructure Pvt. Ltd' },
    { sn: 11, name: 'Empire Heights – 2B+G+7F Residential Hi-End Apartment, Opposite Sahyadri Bungalows',              location: 'Ghodasar, Gujarat',          details: 'MEPF Design Consultancy',   architect: 'M/s. Vallabh Developer' },
    { sn: 12, name: 'Radiance Hospital at Vijay Cross Road',                                                            location: 'Ahmedabad, Gujarat',         details: 'MEPF Design Consultancy',   architect: 'Mehul Bhai (Nairobi Based Builder)' },
    { sn: 13, name: 'Luxurious Villa for Mr. Raj Kumar Hirani',                                                         location: 'Coonoor, TN',               details: 'MEPF Design Consultancy',   architect: 'Ar. Ahsan Ansari' },
    { sn: 14, name: 'Luxurious Villa for Mr. Anurag Toshniwal',                                                         location: 'Alibaug, Maharashtra',       details: 'MEPF Design Consultancy',   architect: 'Ar. Ahsan Ansari' },
    { sn: 15, name: 'Luxurious Villa for Late Sunaina Kejriwal',                                                        location: 'Alibaug, Maharashtra',       details: 'MEPF Design Consultancy',   architect: 'Ar. Ahsan Ansari' },
    { sn: 16, name: 'Luxurious Villa for Mr. Vinay Sanghi',                                                             location: 'Alibaug, Maharashtra',       details: 'MEPF Design Consultancy',   architect: 'Ar. Ahsan Ansari' },
    { sn: 17, name: '13 Luxurious Row Villas',                                                                          location: 'Siolim, Goa',               details: 'MEPF Design Consultancy',   architect: 'Studio Arch\'type' },
    { sn: 18, name: 'Kalyan Banquet Hall',                                                                              location: 'Kalyan, Maharashtra',        details: 'MEPF Design Consultancy',   architect: 'Steun Enterprises' },
    { sn: 19, name: 'G + 4 Commercial Building at Nerul',                                                               location: 'Nerul, Maharashtra',         details: 'MEPF Design Consultancy',   architect: 'Dimension Architect' },
    { sn: 20, name: 'Goregaon Sports Club – Expansion 500 TR',                                                         location: 'Goregaon, Maharashtra',      details: 'HVAC Consultancy',          architect: 'GSC' },
    { sn: 21, name: 'Conference Centre for Parle',                                                                      location: 'Vile Parle',                details: 'MEPF Consultancy',          architect: 'Ar. Salil Ranadive' },
    { sn: 22, name: 'Villa Project',                                                                                    location: 'Khandala',                  details: 'MEPF Design Consultancy',   architect: 'Akruti Design Co' },
    { sn: 23, name: 'Starship Project',                                                                                 location: 'Lonavala',                  details: 'MEPF Design Consultancy',   architect: 'Akruti Design Co' },
    { sn: 24, name: 'IF.BE World Class Cultural Centre (Renovation Work)',                                              location: 'Ballard Estate, Mumbai',    details: 'MEPF Design Consultancy',   architect: 'Kamal Malik Architecture' },
    { sn: 25, name: 'UCO Bank (MEP Audit)',                                                                             location: 'Fort, Mumbai',              details: 'MEPF Design Consultancy',   architect: 'Ar. Nilesh Bhagat' },
  ];

  readonly projectCategories: ProjectCategory[] = [
    {
      name: 'Residential & High-Rise',
      tag: 'RESIDENTIAL',
      projects: [
        { title: 'G+45 Residential Bldg with Robotic Parking',        image: 'assets/images/G+45 Residential Bldg with Robotic Parking.webp' },
        { title: 'Mangal Murthy Height, Bhiwandi',                     image: 'assets/images/Mangal Murthy Height, Bhiwandi.avif' },
        { title: 'LM Realty Bhiwandi',                                 image: 'assets/images/LM Realty Bhiwandi.avif' },
        { title: 'Marina Bay \u2013 Worli, Amenities & 45 Lobbies',   image: 'assets/images/Marina Bay Worli, Amenities & 45 Lobbies.jpg' },
        { title: 'Residential Tower at Boriwali \u2013 Shivam Group', image: 'assets/images/Residential Tower at Boriwali  Shivam Group.jpg' },
        { title: 'Murlidhar Glory \u2013 Splendid Infrastructure',    image: 'assets/images/Murlidhar Glory  Splendid Infrastructure.jpg' },
        { title: 'Empire Heights Residential Building \u2013 Ghodasar', image: 'assets/images/Empire Heights Residential Building.avif' },
        { title: 'One World Capital',                                  image: 'assets/images/One World Capital.jpeg' },
        { title: 'Murlidhar Paradise',                                 image: 'assets/images/Murlidhar Paradise.avif' },
      ]
    },
    {
      name: 'Commercial, Institutional & Hospitality',
      tag: 'COMMERCIAL',
      projects: [
        { title: 'Wallace Pharmaceutical HQ, Andheri',                         image: 'assets/images/Wallace Pharmaceutical HQ, Andheri.jpeg' },
        { title: 'Free to Fly Club \u2013 Radisson Hotel, Goa',               image: 'assets/images/Free to Fly Club Radisson Hotel, Goa.jpg' },
        { title: 'Shapath V \u2013 Gujarat First IGBC Certified Green Building', image: 'assets/images/Shapath V Gujarat First IGBC Certified Green Building.jpg' },
        { title: 'Shapath Hexa for Savvy Infrastructure Pvt. Ltd',            image: 'assets/images/Shapath Hexa for Savvy Infrastructure Pvt. Ltd.jpg' },
        { title: 'Re-Design + Audit for ISM Moradabad',                       image: 'assets/images/Re-Design + Audit for ISM Moradabad.avif' },
        { title: '100 Bed Saptrishi Hospital \u2013 Lehan Nepal',             image: 'assets/images/Bed Saptrishi Hospital Lehan Nepal.jpg' },
      ]
    },
    {
      name: 'Villas & Bungalows',
      tag: 'VILLAS',
      projects: [
        { title: 'Luxurious Villa for Raj Kumar Hirani',              image: 'assets/images/Luxurious Villa for Raj Kumar Hirani.avif' },
        { title: 'Luxurious Villa – Mr. Anurag Toshniwal',      image: 'assets/images/Luxurious Villa Mr. Anurag Toshniwal.avif' },
        { title: 'Row House Villa – Designed By Gauri Khan',    image: 'assets/images/Row House Villa 13 Designed By Gauri Khan.jpg' },
        { title: 'Luxurious Villa – For Late Sunaina Kejriwal', image: 'assets/images/Luxurious Villa 2013 For Late Sunaina Kejriwal.avif' },
        { title: 'Villa for Dimple Singh – Mau UP',             image: 'assets/images/Villa for Dimple Singh Mau UP.jpg' },
        { title: 'Villa for Kailash Yadav – Azamgarh',         image: 'assets/images/Villa for Kailash Yadav Azamgarh.webp' },
      ]
    }
  ];
}
