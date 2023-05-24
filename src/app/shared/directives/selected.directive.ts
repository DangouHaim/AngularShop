import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[selectedClass]'
})
export class SelectedDirective {

  @Input('selectedClass')
  selectedClass: any;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.addClass(this.elementRef.nativeElement, this.selectedClass);
  }

}
