import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';
import Post from 'src/app/models/post';
@Injectable({
    providedIn: 'root'
})
export class FeedService {

    feedSubject: Subject<any> = new BehaviorSubject<any>([]);

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http
            .get<Post[]>(environment.server);
    }

    addLike(userId, _id) {
        return this.http
            .post(`${environment.server}/addLike`, { userId, _id });
    }

    addComment(postId, comments) {
        return this.http
            .post(`${environment.server}/addComment`, { postId, comments });
    }
}
