import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aa-singIn',
  templateUrl: './singIn.component.html',
  styleUrls: ['./singIn.component.css']
})

export default class SingInComponent {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  err: string;

  Register(email, name, pass, passConfirm) {
    if (pass === passConfirm) {
      this.err = '';
      return this.loginService.SingIn(email, name, pass)
      .subscribe(
        (data: any) => {
          this.router.navigate([`/login`]);
        },
        error => {
          if (error.status === 404) {
          this.err = 'Usuário não encontrado!';
          }
        }
      );
    }
    this.err = 'As senhas não coincidem.';
  }
}
