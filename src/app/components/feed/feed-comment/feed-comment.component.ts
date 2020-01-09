import { Component, Input } from '@angular/core';

@Component({
  selector: 'aa-feed-comment',
  templateUrl: './feed-comment.component.html',
  styleUrls: [ './feed-comment.component.css' ]
})
export default class FeedCommentComponent {

  @Input()
  author: string = '';

  @Input()
  comment: string = '';
}
