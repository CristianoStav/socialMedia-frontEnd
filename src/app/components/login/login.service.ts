import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient
  ) {}

  Login(login, pass) {
    return this.http
      .post(`${environment.server}/login`, { login, pass });
  }

  SingIn(email, name, pass) {
    return this.http
    .post(`${environment.server}/singIn`, { email, name, pass });
  }
}
