import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import User from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export default class UserService {
  constructor(
    private http: HttpClient
  ) { }

  changeProfilePhoto(userId: string, img: string) {
    return this.http
      .patch(
        `${environment.server}/changeProfilePhoto`,
        { _id: userId, image: img }
      );
  }

  getUser(route: ActivatedRoute): any {
    let user: User;
    route
      .fragment
      .subscribe((data: any) => {
        console.log('data', data);
        user = data;
      });

    return user;
  }
}
