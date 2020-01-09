import { Component, Input } from '@angular/core';
import { FeedService } from '../../feed.service';
import Post from 'src/app/models/post';

@Component({
  selector: 'aa-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export default class NewCommentComponent {

  constructor(
    private feedService: FeedService,
  ) { }

  @Input()
  post: any;

  input: string;

  async newComment() {

    if (this.input) {
      const newComment = {
        author: 'Pessoa Aleatória',
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
