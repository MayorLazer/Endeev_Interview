import { Component, OnInit } from '@angular/core';
import { HumansService } from '../services/humans/humans.service';
import { Human } from '../models/human.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  pswrd: string;
  login_flag: boolean  = false ;

  constructor( private humansservice: HumansService, private router: Router) {

  }

  ngOnInit() {
  }
  log ( email: string, pswrd: string ) {
    if( this.humansservice.auth( email, pswrd )) {
      this.router.navigate ( ['/home'] );
    } else {  this.login_flag = true; }
  }
}
