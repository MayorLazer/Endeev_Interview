import { Component, OnInit, NgModule } from '@angular/core';

// Standarts Input for Service of Events
import { Evento } from '../../models/event.model';
import { EventsService } from '../../services/events/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  // Storage interly event array on list event
  events: Evento[];

  constructor(private listeventserviece: EventsService ) {
    // This line is to ensure that event get its values
    this.events = this.listeventserviece.getEvents();
  }

  ngOnInit() {
  }

}
