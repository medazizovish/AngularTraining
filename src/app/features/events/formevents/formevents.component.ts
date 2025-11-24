import { Component } from '@angular/core';
import { EventsService } from '../../../shared/data/events.service';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-formevents',
  templateUrl: './formevents.component.html',
  styleUrl: './formevents.component.css'
})
export class FormeventsComponent {

   event: Eventy = {} as Eventy;

  invalidDate: boolean = false;

  constructor(private eventservice: EventsService) {}

  checkDate() {
    if (this.event.date) {
      const selected = new Date(this.event.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      this.invalidDate = selected <= today;
    } else {
      this.invalidDate = false;
    }
  }

 save() {
  if (!this.invalidDate) {
    this.eventservice.AddEvent(this.event); // no .subscribe() here
    alert('Event sent!');
  }
}



  }

  


