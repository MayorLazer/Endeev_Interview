import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// My Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// My Module
import { ProfileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';


// Import to Get Routing Up&Running
import { AppRouting } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    // Import to Get Routing Up&Running
    RouterModule.forRoot( AppRouting ),
    ProfileModule,
    HomeModule,

  ],
  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
