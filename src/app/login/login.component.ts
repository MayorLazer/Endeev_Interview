import { Component, OnInit } from '@angular/core';
import { HumansService } from '../services/humans/humans.service';
import { Human } from '../models/human.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private humansservice: HumansService) {

  }

  ngOnInit() {
  }
  log ( email: string, pswrd: string ) {
    this.humansservice.auth( email, pswrd );
  }
}
