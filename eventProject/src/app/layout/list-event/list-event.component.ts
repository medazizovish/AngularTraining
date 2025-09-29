import { Component, OnInit } from '@angular/core';

export interface Eventy {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  price: number;
  organizerId: number;
  imagerUrl: string;
  Nbplace: number;
  NbLike: number;
  isLiked?: boolean;
}

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  searchTerm: string = '';
  filteredEvents: Eventy[] = []; // after filterrrr alllllllll events 
  listEvent: Eventy[] = []; 

  constructor() {}

  ngOnInit(): void {
    this.listEvent = [
      {  
        id: 1,
        title: 'Angular training',
        description: 'Angular 18',
        date: new Date('2025-12-10'),
        location: 'Ariana',
        price: 15,
        organizerId: 10,
        imagerUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        Nbplace: 20,
        NbLike: 0,
        isLiked: false
      },
      {  
        id: 2,
        title: 'React Conference',
        description: 'Learn React 18 features',
        date: new Date('2025-11-15'),
        location: 'Tech Hub',
        price: 25,
        organizerId: 15,
        imagerUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        Nbplace: 15,
        NbLike: 5,
        isLiked: false
      },
      {  
        id: 3,
        title: 'Vue.js Workshop',
        description: 'Master Vue.js framework',
        date: new Date('2025-10-20'),
        location: 'Conference Center',
        price: 30,
        organizerId: 20,
        imagerUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        Nbplace: 10,
        NbLike: 12,
        isLiked: false
      },
      {  
        id: 4,
        title: 'JavaScript Summit',
        description: 'Advanced JavaScript techniques',
        date: new Date('2025-09-25'),
        location: 'Digital Campus',
        price: 20,
        organizerId: 25,
        imagerUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        Nbplace: 30,
        NbLike: 8,
        isLiked: false
      }
    ];

    this.filteredEvents = [...this.listEvent];
  }

  toggleLike(event: Eventy): void {
    // Initialize like
    if (event.isLiked === undefined) {
      event.isLiked = false;
    }
    
    // likeeeeeeeeeeeeee
    event.isLiked = !event.isLiked;
    
    // counnnntttttttt like
    if (event.isLiked) {
      event.NbLike++;
    } else {
      event.NbLike--;
    }
  }

  takeTicket(event: Eventy): void {
    if (event.Nbplace > 0) {
      event.Nbplace--;
  
      //  see  alert to user
      alert(`Ticket reserved for "${event.title}"! Remaining spots: ${event.Nbplace}`);
    }
  }

  filterEvents(): void {
    if (!this.searchTerm.trim()) {
      // all events  
      this.filteredEvents = [...this.listEvent];
    } else {
      // rehcerchce  parrrrr title 
      const searchTermLower = this.searchTerm.toLowerCase().trim();
      this.filteredEvents = this.listEvent.filter(event =>
        event.title.toLowerCase().includes(searchTermLower)
      );
    }
  }
}