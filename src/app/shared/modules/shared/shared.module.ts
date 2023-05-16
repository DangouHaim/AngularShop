import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HoverClassDirective } from '../../directives/hover-class.directive';
import { PressedClassDirective } from '../../directives/pressed-class.directive';

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
