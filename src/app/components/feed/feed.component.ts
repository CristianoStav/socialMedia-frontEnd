import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import { FeedService } from './feed.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Post from '../../models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'aa-feed',
    templateUrl: './feed.component.html',
    styles: [`
        .dark-modal .modal-content {
            background-color: #292b2c;
            color: white;
            height: 500px;
          }`
    ],
    styleUrls: ['./feed.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.modal-body]': 'true'
    }
})
export class FeedComponent implements OnInit {

    feedItens: object[] = [];
    post: object;
    userId: string;
    likedPosts: Array<Post>;

    constructor(
        private feedService: FeedService,
        private modal: NgbModal,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

        this.route
            .fragment
            .subscribe((data: any) => {
                this.userId = data._id;
            });

        this.getFeedPosts();

        this.feedService.feedSubject.subscribe(data => {
            this.getFeedPosts();
        });
    }

    getFeedPosts() {
        const feedPosts = this.feedService
            .getPosts()
            .toPromise();

        feedPosts
            .then((posts: any) => {
                const AllPosts: any = this.changeLikeIcon(posts);

                this.feedItens = AllPosts;

            });
    }

    addLike({ _id }): void {

        const postLiked = this.feedService
            .addLike(this.userId, _id)
            .toPromise();

        postLiked.then(() => {
            this.getFeedPosts();
        });
    }

    openComments(content, item): void {
        this.post = item;

        this.modal.open(content, {
            scrollable: false,
            windowClass: 'dark-modal',
            centered: true,
        });
    }

    changeLikeIcon(posts: Post[]) {
        return posts.map(post => {
            return post.likes.includes(this.userId) ? { ...post, liked: true } : post;
        });
    }
}
