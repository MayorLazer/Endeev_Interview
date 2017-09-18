import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  fecha: number;
  calendar_days: number[ ] = [1, 2 , 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17];

  constructor() { }

  ngOnInit() {
    this.fecha = Date.now();
  }

}
