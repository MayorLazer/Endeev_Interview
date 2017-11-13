import { Component, OnInit, NgModule } from '@angular/core';

// Standarts Input for Service of Humans
import { Human } from '../models/human.model';
import { HumansService } from '../services/humans/humans.service';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Storage interly the human's profile data
  profile: Human;
  humans: Human[];

constructor(private humansserviece: HumansService) {
    // This line is to ensure that listhuman get its values
    this.humans = this.humansserviece.getHumans( );
}

    ngOnInit() {
      this.profile = this.humans[0];
  }

}
// Binding sesion with profile?
