import { Injectable } from '@angular/core';

// So it can know what event is
import { Human } from '../../models/human.model';

@Injectable()
export class HumansService {
  // humans will store in the Human array
  private humans: Human[];

  // Figure out how to read json
  constructor() {
      this.humans = [
        {
          id: 0,
          name: 'Green Friday',
          last_name: 'Mati',
          email: 'algunemai@ga.com',
          pswrd: 'algunapas'
        },
        {
          id: 0,
          name: 'Green Friday',
          last_name: 'Mati',
          email: 'algunemai@ga.com',
          pswrd: 'algunapas'
        },
        {
          id: 0,
          name: 'Green Friday',
          last_name: 'Mati',
          email: 'algunemai@ga.com',
          pswrd: 'algunapas'
      }
    ];
  }
  // Self expleinatory methods
  getHumans (): Human[] {
    return this.humans;
  }
  isHuman(is_human: Human): boolean {
    if ( this.humans.indexOf(is_human) !== -1 ) {
    return true;
    }return false;
  }
  addHuman (add_human: Human): number {
    if ( this.humans.indexOf(add_human) !== -1 ) {
      return this.humans.push(add_human);
    }
  }
  getHuman(search_human: Human): Human {
    return this.humans[this.humans.indexOf(search_human)];
  }
  removeHuman(remove_human: Human) {
    if ( this.humans.indexOf(remove_human) !== -1 ) {
      return this.humans.splice(this.humans.indexOf(remove_human));
    }
  }
}
