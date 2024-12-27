import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private router: Router) { }

  onClickOfUpdateButton() {
    this.router.navigate(['/home']);
  }

  onClickOfCancelButton() {
    this.router.navigate(['/home']);
  }

}
