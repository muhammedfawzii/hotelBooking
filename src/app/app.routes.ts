import { Routes } from '@angular/router';
import { ComponentsloginComponent } from './componentslogin/componentslogin.component';
import { ComponentsusersComponent } from './componentsusers/componentsusers.component';
import { ComponentsroomsComponent } from './componentsrooms/componentsrooms.component';
import { ComponentsnewBookingComponent } from './componentsnew-booking/componentsnew-booking.component';
import { ComponentsdashboardComponent } from './componentsdashboard/componentsdashboard.component';
import { ComponentsbookingCalendarComponent } from './componentsbooking-calendar/componentsbooking-calendar.component';
import { ComponentsbookingListComponent } from './componentsbooking-list/componentsbooking-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'' , redirectTo: 'login' , pathMatch:'full'},
    {path:'login', component:ComponentsloginComponent, title:'login'},
    {path:'users' , component:ComponentsusersComponent , title:'users'},
    {path:'rooms' , component:ComponentsroomsComponent , title:'rooms'},
    {path:'new-booking' , component:ComponentsnewBookingComponent , title:'new-booking'},
    {path:'dashboard' , component:ComponentsdashboardComponent , title:'dashboard'},
    {path:'booking-calendar' , component:ComponentsbookingCalendarComponent , title:'calendar'},
    {path:'booking-list' , component:ComponentsbookingListComponent , title:'list'},
    {path:'**' , component:NotFoundComponent}
];
