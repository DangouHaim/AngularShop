import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductComponent, ProductListComponent } from './index';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
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
