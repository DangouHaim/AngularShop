import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent, FakeComponent, HoverClassDirective, PressedClassDirective, SelectedDirective } from './index';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SharedComponent,
    ButtonComponent,
    FakeComponent,
    HoverClassDirective,
    PressedClassDirective,
    SelectedDirective,
    OrderByPipe,
  ],
  providers: [],
  exports: [
    ButtonComponent,
    FakeComponent,
    HoverClassDirective,
    PressedClassDirective,
    SelectedDirective,
    OrderByPipe,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule { }
