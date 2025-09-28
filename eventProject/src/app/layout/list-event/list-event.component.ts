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

  listEvent: Eventy[] = []; 

  constructor() {}

  ngOnInit(): void {
    this.listEvent = [
      {  
        id: 1,
        title: 'Angular training',
        description: 'Angular 18',
        date: new Date('2025-12-10'),
        location: 'ariaana',
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
        location: 'tech hub',
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
        location: 'conference center',
        price: 30,
        organizerId: 20,
imagerUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"   ,
    Nbplace: 10,
        NbLike: 12,
        isLiked: false
      }
    ];
  }

  toggleLike(event: Eventy): void {
    // Make sure isLiked is initialized
    if (event.isLiked === undefined) {
      event.isLiked = false;
    }
    
    // Toggle the like state
    event.isLiked = !event.isLiked;
    
    // Update the like count
    if (event.isLiked) {
      event.NbLike++;
    } else {
      event.NbLike--;
    }
  }
}