import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent, FakeComponent, HoverClassDirective, PressedClassDirective, SelectedDirective } from './index';

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
    SelectedDirective,
  ],
  providers: [],
  exports: [
    ButtonComponent,
    FakeComponent,
    HoverClassDirective,
    PressedClassDirective,
    SelectedDirective,
  ],
})
export class SharedModule { }
