import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, RouterModule],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.scss'
})
export class BottomNavbarComponent {

}
