import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { SignupFormService } from '../../services/signup-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  providers: [SignupFormService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  formData = {
    name: '',
    employeeID: '',
    gender: '',
    email: '',
    department: ''
  };
  

  constructor(
    private authService: AuthService,
    private router: Router,
    private signupService: SignupFormService
  ) { }

  validateEmailDomain(email: string): boolean {
    const domain = email.split('@')[1];
    return domain === 'neutrinotechlabs.com';
  }

  onSignup(): void {
    if (!this.validateEmailDomain(this.formData.email)) {
      this.errorMessage = "Please enter your neutrino's mail";
      return;
    }

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
