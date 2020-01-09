import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import HeaderComponent from './header.component';
import { FeedComponent } from '../feed/feed.component';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from '../login/login.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  }
]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }