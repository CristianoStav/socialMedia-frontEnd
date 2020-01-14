import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedService } from './feed.service';
import Post from '../../models/post';
import User from 'src/app/models/user';

@Component({
    selector: 'aa-feed',
    templateUrl: './feed.component.html',
    styles: [`
        .dark-modal .modal-content {
            background-color: #292b2c;
            color: white;
            height: 500px;
          }
        .like-modal .modal-content{
            background-color: #292b2c;
            color: white;
            height: 431px;
        }`
    ],
    styleUrls: ['./feed.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class FeedComponent implements OnInit {

    feedItens: object[] = [];
    post: Post;
    user: User;
    likedPosts: Array<Post>;

    constructor(
        private feedService: FeedService,
        private modal: NgbModal,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

        this.user = JSON.parse(sessionStorage.getItem('user')) as unknown as User;

        this.getFeedPosts();

        this.feedService.feedSubject.subscribe(() => {
            this.getFeedPosts();
        });
    }

    getFeedPosts() {
        const feedPosts = this.feedService
            .getPosts()
            .toPromise();

        feedPosts
            .then((posts: any) => {
                const AllPosts: Post[] = this.changeLikeIcon(posts);
                console.log(AllPosts);
                this.feedItens = AllPosts;
            });

    }

    addLike({ _id }): void {

        const postLiked = this.feedService
            .addLike(this.user, _id)
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

    openLikesModal(template, post): void {
        this.post = post;
        this.modal.open(template, {
            scrollable: false,
            windowClass: 'like-modal',
            centered: true
        });
    }

    changeLikeIcon(posts: Post[]) {
        const array = [];

        posts.forEach(post => {
            if (post.likes.length) {
                post.likes.forEach((like: any) => {
                    if (like._id === this.user._id) {
                        post.liked = true;
                    }
                });
            }
            array.push(post);
        });

        return array;
    }

    deletePost(post: Post) {
        const deleted = this.feedService
            .deletePost(post._id)
            .toPromise();

        deleted
            .then(resp => {
                this.getFeedPosts();
            });
    }
}
