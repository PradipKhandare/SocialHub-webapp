import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { OtpVerificationService } from '../../services/otp-verification.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SignupFormService } from '../../services/signup-form.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [OtpVerificationService, SignupFormService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  otp: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private otpService: OtpVerificationService) { }
  onLogin(): void {
    this.authService
      .login(this.username, this.password)
      .subscribe((success) => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          alert('Invalid credentials');
        }
      });
  }

  onCreateNew(): void {
    this.router.navigate(['/signup']);
  }

  onForgetPassword(): void {
    this.router.navigate(['/forget-password']);

  }

  onSendOtp(): void {
    if (this.username.endsWith('@neutrinotechlabs.com')) {
      this.otpService.sendOtp(this.username).subscribe(
        (response) => {
          console.log('OTP sent successfully:', response);
        },
        (error) => {
          console.error('Failed to send OTP:', error);
        }
      );
    } else {
      this.errorMessage = 'Please use a neutrinotechlabs.com email address.';
    }
  }

  onVerifyOtp(): void {
    if (this.username && this.otp) {
      this.otpService.verifyOtp(this.username, this.otp).subscribe(
        (response: string) => {
          if (response === 'OTP verified successfully.') {
            this.successMessage = 'OTP verified successfully. Redirecting to home...';
            this.errorMessage = '';
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 3000);
          } else {
            this.errorMessage = 'Invalid OTP or email. Please try again.';
            this.successMessage = '';
          }
        },
        (error) => {
          console.error('Failed to verify OTP:', error);
          this.errorMessage = 'Failed to verify OTP. Please enter correct details.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Email and OTP are required.';
      this.successMessage = '';
    }
  }

}
