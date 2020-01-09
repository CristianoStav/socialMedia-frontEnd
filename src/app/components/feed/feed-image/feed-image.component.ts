import { Component, Input } from '@angular/core';

@Component({
    selector: 'aa-feed-image',
    templateUrl: './feed-image.component.html',
    styleUrls: ['./feed-image.component.css']
})
export class FeedImageComponent{

    @Input()
    image: string = '';

    @Input()
    nomeUsuario: string = '';

}