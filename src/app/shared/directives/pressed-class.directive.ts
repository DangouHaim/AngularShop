import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pressedClass]'
})
export class PressedClassDirective {
  
  @Input('pressedClass')
  pressedClass: any;

  constructor(public elementRef: ElementRef) { }

  @HostListener('mousedown') onMouseDown() {
    this.elementRef.nativeElement.classList.add(this.pressedClass);
  }

  @HostListener('mouseup') onMouseUp() {
    this.elementRef.nativeElement.classList.remove(this.pressedClass);
  }
}
