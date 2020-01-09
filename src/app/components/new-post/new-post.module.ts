import { NgModule } from '@angular/core';
import { NewPostComponent } from './new-post.component';
import { CommonModule } from '@angular/common';
import { NewPostPhotoComponent } from './new-post-photo/new-post-photo.component';

@NgModule({
  declarations: [NewPostComponent, NewPostPhotoComponent],
  imports: [CommonModule],
  exports: [NewPostComponent]
})
export class NewPostModule {}
