import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { BottomNavbarComponent } from '../../shared/bottom-navbar/bottom-navbar.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { HomeComponent } from '../../components/home/home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingRoutingModule,
    BottomNavbarComponent,
    
  ]
})
export class AppRoutingModule { }
