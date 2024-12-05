import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): Observable<boolean> {
    // Simulate authentication
    this.isAuthenticated = (username === 'user' && password === 'password');
    return of(this.isAuthenticated);
  }

  signup(username: string, password: string): Observable<boolean> {
    // Simulate user registration
    return of(true);
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
