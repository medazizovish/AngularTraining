import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../shared/data/events.service';
import { Eventy } from '../../models/eventy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  List: Eventy[];
  topLikedEvents: Eventy[] = []; 

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      (data: Eventy[]) => {
        this.List = data;
        this.getTopLikedEvents();
      }
    );
  }

  getTopLikedEvents(): void {
    if (this.List && this.List.length > 0) {
      this.topLikedEvents = [...this.List]
        .sort((a, b) => b.nbrLike - a.nbrLike)
        .slice(0, 3);
    }
  }
}