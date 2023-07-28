import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonComponent, FakeComponent, HoverClassDirective, PressedClassDirective, SelectedDirective } from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RouterLink } from '@angular/router';
import { ProcessOrderComponent } from '../purchases/process-order/process-order/process-order.component';
import { ProductComponent, ProductListComponent } from '../products';
import { EmailRegExValidatorDirective } from '../purchases/validators/validators';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  declarations: [
    SharedComponent,
    ButtonComponent,
    FakeComponent,
    ProductComponent,
    ProductListComponent,
    ProcessOrderComponent,
    HoverClassDirective,
    EmailRegExValidatorDirective,
    PressedClassDirective,
    SelectedDirective,
    OrderByPipe,
  ],
  providers: [],
  exports: [
    ButtonComponent,
    FakeComponent,
    ProductComponent,
    ProductListComponent,
    ProcessOrderComponent,
    EmailRegExValidatorDirective,
    HoverClassDirective,
    PressedClassDirective,
    SelectedDirective,
    OrderByPipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class SharedModule { }
