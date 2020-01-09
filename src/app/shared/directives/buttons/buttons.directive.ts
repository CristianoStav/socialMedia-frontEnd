import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: "[buttonChange]",
})
export class ButtonsDirective {

    @Input()
    classe: string;

    constructor(
        private el: ElementRef,
        private render: Renderer2,
    ) { }

    @HostListener('click')
    buttonColored() {
        const cla = this.el.nativeElement.attributes[1].nodeValue.split(' ');

        if (!cla.includes(this.classe)) {
            this.render.addClass(this.el.nativeElement, this.classe);
        } else {
            this.render.removeClass(this.el.nativeElement, this.classe);
        }
    }
}
