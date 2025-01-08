import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, OtpVerificationResponse } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.baseUrl + "/sendotp"
  private verifyOtpUrl = `${environment.baseUrl}/verifyotp`;


  sendOtp(email: string): Observable<string> {
    const url = `${this.apiUrl}?email=${encodeURIComponent(email)}`;
    return this.http.post<string>(url, {}, { responseType: 'text' as 'json' });
  }


  verifyOtp(email: string, otp: string): Observable<OtpVerificationResponse> {
    const body = { email, otp };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<OtpVerificationResponse>(this.verifyOtpUrl, body, { headers });
  }


  logout(email: string): Observable<string> {
    const url = `${environment.baseUrl}/logout?email=${encodeURIComponent(email)}`;
    return this.http.post<any>(url, {}, { responseType: 'text' as 'json' });
  }

}
