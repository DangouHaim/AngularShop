import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent, HoverClassDirective, PressedClassDirective } from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    ButtonComponent,
    HoverClassDirective,
    PressedClassDirective,
  ],
  providers: [],
  exports: [
    ButtonComponent,
    HoverClassDirective,
    PressedClassDirective,
  ],
})
export class SharedModule { }
