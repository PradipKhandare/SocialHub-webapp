import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingRoutingModule } from './modules/app-routing/app-routing-routing.module';
import { BottomNavbarComponent } from './shared/bottom-navbar/bottom-navbar.component';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppRoutingRoutingModule,
    TopNavbarComponent,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Neutrino-TalentBox';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    // Check the initial route
    const noNavbarRoutes = ['/login', '/signup'];
    this.showNavbar = !noNavbarRoutes.includes(this.router.url);

    // Subscribe to future route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !noNavbarRoutes.includes(event.url);
      }
    });
  }
}
