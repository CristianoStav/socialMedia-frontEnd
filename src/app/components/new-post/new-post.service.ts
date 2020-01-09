import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Post from '../../models/post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor(private http: HttpClient) { }

  savePost(post: object): Observable<Post> {
    return this.http
      .post<Post>(`${environment.server}/createPost`, post);
  }
}
