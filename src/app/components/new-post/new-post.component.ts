import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { NewPostService } from './new-post.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FeedService } from '../feed/feed.service';

@Component({
  selector: 'aa-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(
    private postService: NewPostService,
    private feedService: FeedService,
    private route: ActivatedRoute
  ) { }

  @Input()
  name: string;

  profilePhoto: string;

  ngOnInit() {
    this.route
      .fragment
      .subscribe((data: any) => {
        this.profilePhoto = data.perfilPhoto || environment.profileDefaultPhoto;
      });
  }

  async newPost(post: string, img: string) {

    const newPost = {
      author: this.name,
      thumbAuthor: this.profilePhoto || environment.profileDefaultPhoto,
      date: new Date(),
      description: post,
      likes: [],
      comments: [],
      photo: img
    };

    const createPost = this.postService
      .savePost(newPost)
      .toPromise();

    createPost
      .then(() => {
        this.feedService.feedSubject.next({});
        this.clean();
      });
  }

  clean() {
    document.querySelector('textarea').value = '';
    document.querySelector('aa-new-post-photo')
      .childNodes.item(0)
      .childNodes.item(1)
      .childNodes.item(1);
  }
}
