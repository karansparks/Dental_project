import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:3000/api/appointment';

  constructor(private http: HttpClient) {}

  addUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
