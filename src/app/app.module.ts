import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Bootstrap css Modlues
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

// My Components
import { AppComponent } from './app.component';
import { ProfileComponent } from './menu/profile/profile.component';
import { ListEventsComponent } from './menu/list-events/list-events.component';
import { CalendarComponent } from './menu/calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

// My Models
import { Evento } from './models/event.model';
import { Human } from './models/human.model';

// My Services
import { HumansService } from './services/humans/humans.service';
import { EventsService } from './services/events/events.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListEventsComponent,
    CalendarComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    // Import for Boostrap css modules
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  // Add Export Class Name of Each Service So its instance GLOBALLY SINGLETON
  providers: [ HumansService, EventsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
