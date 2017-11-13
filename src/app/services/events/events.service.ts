import { Injectable } from '@angular/core';

// So it can know what evento is
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
          description: 'El doggo day :3'
        },
        {
          id: 2,
          name: 'Meeting Room',
          author: 'Diego',
          date_begin: new Date(2015, 12, 10, 4, 10),
          date_end: new Date(2015, 12, 10, 5, 10),
          description: 'The english class'
        },
        {
          id: 3,
          name: 'Dog Day',
          author: 'Seba',
          date_begin: new Date(2017, 12, 10, 4, 10),
          date_end: new Date(2017, 12, 10, 5, 10),
          description: 'Doggerino'
      },
        {
          id: 3,
          name: 'Dog Day',
          author: 'Seba',
          date_begin: new Date(2017, 12, 10, 4, 10),
          date_end: new Date(2017, 12, 10, 5, 10),
          description: 'Doggerino'
        },
        {
          id: 3,
          name: 'Dog Day',
          author: 'Seba',
          date_begin: new Date(2017, 12, 10, 4, 10),
          date_end: new Date(2017, 12, 10, 5, 10),
          description: 'Doggerino'
        }
    ];
  }
  // Self expleinatory methods
  getEvents (): Evento[] {
    return this.events;
  }
  isEvento(is_event: Evento): boolean {
    if ( this.events.indexOf(is_event) !== -1 ) {
    return true;
    }return false;
  }
  addEvento (add_event: Evento): number {
    if ( this.events.indexOf(add_event) !== -1 ) {
      return this.events.push(add_event);
    }
  }
  getEvento(search_event: Evento): Evento {
    return this.events[this.events.indexOf(search_event)];
  }
  removeEvento(remove_event: Evento) {
    if ( this.events.indexOf(remove_event) !== -1 ) {
      return this.events.splice(this.events.indexOf(remove_event),1);
    }
  }
}
