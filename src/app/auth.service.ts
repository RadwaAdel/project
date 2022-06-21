import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData } from '../app/auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  createuser(name: string, email: string, password: string) {
    const authData: AuthData = { name: name, email: email, password: password };
    this.http
      .post('http://localhost:5000/user', authData)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
