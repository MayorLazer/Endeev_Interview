import { Injectable } from '@angular/core';

// So it can know what event is
import { Human } from '../../models/human.model';

@Injectable()
export class HumansService {
  // humans will store in the Human array
  private humans: Human[];

  constructor() {
      this.humans = [
        {
          id: 0,
          name: 'Mati',
          last_name: 'Mati',
          email: 'algunemai@ga.com',
          pswrd: 'mati'
        },
        {
          id: 1,
          name: 'Diego',
          last_name: 'Diego',
          email: 'algunemai@ga.com',
          pswrd: 'diego'
        },
        {
          id: 2,
          name: 'Ale',
          last_name: 'Ale',
          email: 'algunemai@ga.com',
          pswrd: 'ale'
        },
        {
          id: 3,
          name: 'a',
          last_name: 'a',
          email: 'a',
          pswrd: 'a'
        }
    ];
  }
  // Kinda Insecure dont you think?
  getHumans (): Human[] {
    return this.humans;
  }
  isHuman(is_human: Human): boolean {
    if ( this.humans.indexOf(is_human) !== -1 ) {
    return true;
    }return false;
  }
  // This return the human...
  getProfile(email: string, pswrd: string): Human {
    for (const user of this.humans) {
      if ( user.email === email && user.pswrd === pswrd) {
        return user;
      }
    } return null;
  }
  // Push human to the array
  addHuman (add_human: Human): number {
    if ( this.humans.indexOf(add_human) !== -1 ) {
      return this.humans.push(add_human);
    }
  }
  getHuman(search_human: Human): Human {
    return this.humans[this.humans.indexOf(search_human)];
  }
  // Delete the human
  removeHuman(remove_human: Human) {
    if ( this.humans.indexOf(remove_human) !== -1 ) {
      return this.humans.splice(this.humans.indexOf(remove_human));
    }
  }
  // This function as an auth...
  auth(email: string, pswrd: string): boolean {
    for (const user of this.humans) {
      if ( user.email === email && user.pswrd === pswrd) {
        return true;
      }
    } return false;
  }
}
