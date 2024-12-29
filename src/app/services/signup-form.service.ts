import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  private apiUrl = environment.baseUrl + "/signup"

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}`, employee);
  }

}
