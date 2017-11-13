/**
 * Created by sebamartorell on 11/13/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent
  ],
  // Add Export Class Name of Each Service So its instance GLOBALLY SINGLETON
  providers: [
  ],
  exports: [ NavbarComponent ]
})
export class NavbarModule { }
