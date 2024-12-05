import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSignup(): void {
    this.authService.signup(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/login']);
      } else {
        alert('Signup failed');
      }
    }
    );
  }

}
