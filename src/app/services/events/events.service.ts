import { Injectable } from '@angular/core';

// So it can know what event is
import { Evento } from '../../models/event.model';

@Injectable()
export class EventsService {
 // events will store the Event array
 private events: Evento[];
  constructor() {
      this.events = [
        {
          id: 0,
          name: 'Green Friday',
          author: 'Mati',
          date_begin: new Date(2015, 12, 10, 4, 10),
          date_end: new Date(2015, 12, 10, 5, 10),
          description: 'El green friday ;)'
        },
        {
          id: 1,
          name: 'Dogs Day',
          author: 'Ale',
          date_begin: new Date(2015, 12, 10, 4, 10),
          date_end: new Date(2015, 12, 10, 5, 10),
          description: 'El green friday ;)'
        },
        {
          id: 2,
          name: 'Meeting Room',
          author: 'Diego',
          date_begin: new Date(2015, 12, 10, 4, 10),
          date_end: new Date(2015, 12, 10, 5, 10),
          description: 'El green friday ;)'
      }
    ];
  }
  // Self expleinatory methods
  getEvents() {
    return this.events;
  }
  addEvents(add_event: Evento) {
    if ( this.events.indexOf(add_event) !== -1 ) {
      return;
    }
    this.events.push(add_event);
  }
  removeEvent(erase_event: Evento) {
    return this.events.splice(this.events.indexOf(erase_event));
  }

}
