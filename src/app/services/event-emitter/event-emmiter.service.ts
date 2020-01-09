import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeGetPostsFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onNewPostCadastred() {
    this.invokeGetPostsFunction.emit();
  }
}
