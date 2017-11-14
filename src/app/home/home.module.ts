import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRouting } from './home.rounting';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// My Components
import { ListEventsComponent } from './list-events/list-events.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home.component';
import { NavbarModule} from '../navbar/navbar.module';

// My Services
import { HumansService } from '../services/humans/humans.service';
import { EventsService } from '../services/events/events.service';


@NgModule({
  imports: [
    CommonModule,
    // Import for Boostrap css modules
    RouterModule.forChild( HomeRouting ),
    NavbarModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ListEventsComponent,
    CalendarComponent,
    HomeComponent
  ],
  // Add Export Class Name of Each Service So its instance GLOBALLY SINGLETON
  providers: [
    HumansService,
    EventsService
  ]
})
export class HomeModule { }
