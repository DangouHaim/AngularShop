import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent, FakeComponent, HoverClassDirective, PressedClassDirective } from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    ButtonComponent,
    FakeComponent,
    HoverClassDirective,
    PressedClassDirective,
  ],
  providers: [],
  exports: [
    ButtonComponent,
    FakeComponent,
    HoverClassDirective,
    PressedClassDirective,
  ],
})
export class SharedModule { }
