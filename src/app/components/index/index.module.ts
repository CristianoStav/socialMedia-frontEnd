import { NgModule } from '@angular/core';
import IndexComponent from './index.component';
import { CommonModule } from '@angular/common';
import { FeedModule } from '../feed/feed.module';
import { HeaderModule } from '../header/header.component.module';
import { NewPostModule } from '../new-post/new-post.module';
import { ProfilePhotoModule } from '../profile-photo/profile-photo.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    HeaderModule,
    NewPostModule,
    ProfilePhotoModule
  ],
})
export default class IndexModule{}