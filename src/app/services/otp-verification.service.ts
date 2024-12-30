import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.baseUrl + "/sendotp"

  sendOtp(email: string): Observable<any> {
    const url = `${this.apiUrl}?email=${encodeURIComponent(email)}`; 
    return this.http.post(url, {}); 
  }
}
