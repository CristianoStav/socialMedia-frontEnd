import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/models/user';

@Component({
  selector: 'aa-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export default class IndexComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  name: string;

  ngOnInit() {
    const user: any = JSON.parse(sessionStorage.getItem('user'));

    if (!user) {
      this.router.navigate(['/login']);
    }

    this.name = user.nome;
  }
}
