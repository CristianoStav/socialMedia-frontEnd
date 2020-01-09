import { NgModule } from '@angular/core';
import { ButtonsDirective } from './buttons.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ButtonsDirective],
    imports: [CommonModule],
    exports: [ButtonsDirective]
})
export class ButtonsModule{

}