import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { SignupFormService } from '../../services/signup-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [SignupFormService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  formData = {
    name: '',
    employeeID: '',
    gender: '',
    email: '',
    department: ''
  };

  constructor(private authService: AuthService, private router: Router, private signupService: SignupFormService) { }

  //onSignup(): void {
  //   this.authService
  //     .signup(this.username, this.password)
  //     .subscribe((success) => {
  //       if (success) {
  //         this.router.navigate(['/login']);
  //       } else {
  //         alert('Signup failed');
  //       }
  //     });
  // }
  // onReset(): void {

  // }

  //}

  onSignup(): void {
    const requestBody: Employee = {
      name: this.formData.name,
      employeeID: this.formData.employeeID,
      gender: this.formData.gender,
      email: this.formData.email,
      department: this.formData.department
    };
    this.signupService.createEmployee(requestBody).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup failed:', error);
      }
    );
  }
}
