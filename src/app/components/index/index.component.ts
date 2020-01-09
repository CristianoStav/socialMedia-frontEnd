import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.route
    .fragment
    .subscribe((data: any) => {
      if (!data) {
        this.router.navigate(['/login']);
      }

      // this.name = data.nome;
      this.name = 'Cristiano';
    });
  }
}
