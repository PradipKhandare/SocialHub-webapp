import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/app-routing/app-routing-routing.module').then(m => m.AppRoutingRoutingModule) },
];


