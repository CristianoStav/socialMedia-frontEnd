/* tslint:disable: no-host-metadata-property */
import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import UserService from 'src/app/services/user/user.service';
import User from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'aa-profile-photo',
    templateUrl: './profile-photo.component.html',
    styles: [`
    .photo-modal .modal-content {
        background-color: #292b2c;
        color: white;
        max-height: 700px;
      }`
    ],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.modal-body]': 'true'
    },
    styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {
    constructor(
        private modal: NgbModal,
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    @Input()
    id: string;

    @Input()
    title: string;

    url: string;

    @Input()
    name: string;

    ngOnInit() {
        const user = JSON.parse(sessionStorage.getItem('user'));

        this.id = user._id || undefined;
        this.url = user.perfilPhoto || environment.profileDefaultPhoto;
    }

    viewProfilePicture(content) {
        this.modal.open(content, {
            scrollable: false,
            centered: true,
            windowClass: 'photo-modal',
        });
    }

    removeProfilePicture(img: HTMLImageElement) {
        img.src = '';
    }

    changeProfileImage(event: any, img: HTMLImageElement) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = (e: any) => {
            img.src = e.target.result as string;
        };

        reader.readAsDataURL(file);
    }

    saveProfilePhoto(img: HTMLImageElement) {
        this.route
            .fragment
            .subscribe((data: any) => { this.id = data._id; });

        this.userService
            .changeProfilePhoto(this.id, img.src)
            .subscribe((resp: User) => {
                this.url = resp.perfilPhoto;
            });

    }

}
