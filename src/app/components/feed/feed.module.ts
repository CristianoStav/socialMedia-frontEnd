import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed.component';
import { FeedImageComponent } from './feed-image/feed-image.component';
import { ButtonsModule } from 'src/app/shared/directives/buttons/buttons.module';
import ModalModule from 'src/app/shared/components/modal.module';
import FeedCommentComponent from './feed-comment/feed-comment.component';
import NewCommentComponent from './feed-comment/new-comment/new-comment.component';
import FeedLikesComponent from './feed-likes/feed-likes.component';

@NgModule({
    declarations: [
        FeedComponent,
        FeedImageComponent,
        FeedCommentComponent,
        NewCommentComponent,
        FeedLikesComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule,
        ModalModule,
    ],
    exports: [FeedComponent]
})
export class FeedModule { }
