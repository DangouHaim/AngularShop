import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { CartComponent, PurchaseAlertComponent, PurchaseAlertListComponent } from './index';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    SharedModule,
  ],
  declarations: [
    PurchasesComponent,
    CartComponent,
    PurchaseAlertComponent,
    PurchaseAlertListComponent,
  ],
  exports: [
    CartComponent,
    PurchaseAlertComponent,
    PurchaseAlertListComponent,
  ]
})
export class PurchasesModule { }
