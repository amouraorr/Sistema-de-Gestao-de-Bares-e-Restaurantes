import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; 

  constructor(private http: HttpClient) {}

  // Method to log in and obtain the token
  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.http.post<any>(this.apiUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Method to retrieve the token stored in localStorage
  getToken(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).token : null;
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    // You can add logic to verify the token's validity here if needed
    return !!token; // Returns true if the token exists
  }

  // Method for logging out that can clear localStorage
  logout(): void {
    localStorage.removeItem('user');
  }
}
