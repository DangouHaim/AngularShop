import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent, FakeComponent, HoverClassDirective, PressedClassDirective, SelectedDirective } from './index';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
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
    RouterLink,
  ],
})
export class SharedModule { }
