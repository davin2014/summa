import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouteTripsFormComponent } from './route/route-trips-form/route-trips-form.component';
import { RouteTripsTableComponent } from './route/route-trips-table/route-trips-table.component';

export const routes: Routes = [ 
    { path: '', redirectTo: '/route', pathMatch: 'full' },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'routeForm',
        component: RouteTripsFormComponent
    },
    {
        path: 'route',
        component: RouteTripsTableComponent
    }
];
