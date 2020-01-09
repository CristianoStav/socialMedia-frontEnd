import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import LoginComponent from './login.component';
import { RouterModule, Routes } from '@angular/router';
import IndexComponent from '../index/index.component';
import SingInComponent from './singIn/singIn.component';

const routes: Routes = [
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'singIn', component: SingInComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    SingInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    ),
  ],
  exports: [
    LoginComponent
  ]
})

export default class LoginModule { }