import { NgModule } from '@angular/core';
import { NgbModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgbModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NgbModalComponent]
})
export default class NgbModalModule{

}