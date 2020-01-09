import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePhotoModule } from './components/profile-photo/profile-photo.module';
import { FeedModule } from './components/feed/feed.module';
import { HttpClientModule } from '@angular/common/http';
import { NewPostModule } from './components/new-post/new-post.module';
import { EventEmitterService } from './services/event-emitter/event-emmiter.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './components/header/header.component.module';
import LoginModule from './components/login/login.module';
import { Routes, RouterModule } from '@angular/router';
import LoginComponent from './components/login/login.component';
import IndexModule from './components/index/index.module';

const appRoutes: Routes = [
  {
    path: '', component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FeedModule,
    ProfilePhotoModule,
    NewPostModule,
    LoginModule,
    HeaderModule,
    IndexModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent],

})
export class AppModule { }
