import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';

// Standarts Input for Service of Events
import { Evento } from '../../models/event.model';
import { EventsService } from '../../services/events/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: 'list-events.component.html',
  styleUrls: ['list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  // Storage interly event array on list event
  events: Evento[];
  deleteevent: Evento;

  constructor( private listeventserviece: EventsService ) {
    // This line is to ensure that event get its values
    this.events = this.listeventserviece.getEvents();
  }

  ngOnInit() {
  }

  removeEvent( remove_event: Evento) {
    console.log('event to remove', remove_event);
    this.listeventserviece.removeEvento( remove_event );
  }

  editEvent ( event: Evento , edited_event: Evento ) {
    this.listeventserviece.editEvento ( event, edited_event );
  }


}
