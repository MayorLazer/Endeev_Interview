import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  searchHome: string = '';

  constructor() { }

  ngOnInit() {
  }

  processEvent($event){
    console.log('evento recibido', $event);
    this.searchHome = $event;
  }

}
