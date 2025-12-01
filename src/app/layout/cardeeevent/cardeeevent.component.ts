import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eventy } from '../../models/eventy';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-cardeeevent',
  standalone: true,
  imports: [
  RouterModule,
  CommonModule,
  SharedModule
  ],
  templateUrl: './cardeeevent.component.html',
  styleUrl: './cardeeevent.component.css'
})
export class CardeeeventComponent {
@Input() e: Eventy;


  searchValue: string;
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
