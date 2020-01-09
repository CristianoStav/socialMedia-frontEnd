import { Component } from '@angular/core';

@Component({
  selector: 'aa-new-post-photo',
  templateUrl: './new-post-photo.component.html',
  styleUrls: ['./new-post-photo.component.css'],
  
})
export class NewPostPhotoComponent {

  img: any = '';

  constructor(){}

  readURL(event: any):void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.img = reader.result;

      reader.readAsDataURL(file);
    }
  }

}