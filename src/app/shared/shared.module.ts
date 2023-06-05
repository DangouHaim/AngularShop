import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent, FakeComponent, HoverClassDirective, PressedClassDirective, SelectedDirective } from './index';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';

const modules = [CommonModule, FormsModule];
const components = [ButtonComponent, FakeComponent];
const directives = [HoverClassDirective, PressedClassDirective, SelectedDirective];
const pipes = [OrderByPipe];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    SharedComponent,
    ...components,
    ...directives,
    ...pipes,
  ],
  exports: [
    ...modules,
    ...components,
    ...directives,
    ...pipes,

  ],
})
export class SharedModule { }
