import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'aa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export default class LoginComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  err: string;

  Logar(name, pass): void {
    this.loginService.Login(name, pass)
      .subscribe(
        (data: any) => {
          this.router.navigate([`/index`], { fragment: data });
        },
        error => {
          if (error.status === 404) {
          this.err = 'Usuário não encontrado!';
          }
        }
      );
  }
}
