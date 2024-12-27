import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent {

  constructor(private router: Router) { }

  onHomeIconClick() {
    this.router.navigate(['/home']);
  }

}
