import { Component, Input } from '@angular/core';

@Component({
  selector: 'aa-feed-likes',
  templateUrl: './feed-likes.component.html',
  styleUrls: ['./feed-likes.component.css']
})
export default class FeedLikesComponent {

  @Input()
  likes: Array<object>;
}
