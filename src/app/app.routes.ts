import { Routes } from '@angular/router';
import { InsertComponent } from './components/insert/insert/insert.component';
import { HomeComponent } from './components/home/home/home.component';

export const routes: Routes = [
    {
        path:"insert",
        component:InsertComponent
    },
    {
        path:"",
        component:HomeComponent
    }
];
