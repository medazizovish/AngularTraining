import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent {
  searchValue: string;
  @Input() e: Eventy;
  @Output() notificationLike: EventEmitter<Eventy> = new EventEmitter();
  @Output() notificationDelete: EventEmitter<Eventy> = new EventEmitter();
  @Output() notificationBuy: EventEmitter<Eventy> = new EventEmitter();

  likeEvent(e: Eventy) {
    // Increment like count
    e.nbrLike += 1;
    this.notificationLike.emit(e);
  }

  nbrPlaceDecr(e: Eventy) {
    if (e.nbPlaces > 0) {
      e.nbPlaces -= 1;
      this.notificationBuy.emit(e);
    }
  }

  deleteEvent(e: Eventy) {
    this.notificationDelete.emit(e);
  }
}