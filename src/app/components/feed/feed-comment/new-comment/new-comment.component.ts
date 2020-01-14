import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from '../../feed.service';
import { ActivatedRoute } from '@angular/router';
import User from 'src/app/models/user';
import UserService from 'src/app/services/user/user.service';

@Component({
  selector: 'aa-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export default class NewCommentComponent implements OnInit {

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  @Input()
  post: any;

  input: string;
  user: User;

  ngOnInit(): void {
    this.user =  JSON.parse(sessionStorage.getItem('user')) as unknown as User;

  }

  async newComment() {

    if (this.input) {
      console.log(this.user);
      const newComment = {
        author: this.user.nome,
        comment: this.input
      };

      const comments = [...this.post.comments, newComment];

      await this.feedService.addComment(this.post._id, comments)
        .subscribe(() => {
          this.post.comments = comments;
        });

    }

    const input = document.getElementById('clear') as HTMLInputElement;

    input.value = '';
  }
}
