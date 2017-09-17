// This imports for Routes use
import { Routes, RouterModule } from '@angular/router';

// Imports so router knows elements
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

// This is routing... when /path is type... what do angular load?
const APP_ROUTES: Routes = [
    // Where navigation starts
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
