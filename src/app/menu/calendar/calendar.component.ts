import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendar_days: number[];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 30; i++) {
      this.calendar_days.push(i);
  }
  }

}
