/*
 * Created by sebamartorell on 11/13/17.
 */
import { Routes } from '@angular/router';

import  { LoginComponent } from  './login/login.component';


export const AppRouting: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  { path: 'login',
    component: LoginComponent },
  {
    path: '**',
    redirectTo: 'login'
  },

];
