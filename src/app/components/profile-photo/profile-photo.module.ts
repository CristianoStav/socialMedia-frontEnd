import { NgModule } from '@angular/core';
import { ProfilePhotoComponent } from './profile-photo.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ProfilePhotoComponent],
    imports: [CommonModule],
    exports: [ProfilePhotoComponent]
})
export class ProfilePhotoModule { }
