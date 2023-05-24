import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent, ProductListComponent } from './index';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
  ]
})
export class ProductsModule { }
