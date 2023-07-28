import { NgModule } from '@angular/core';
import { PurchasesComponent } from './purchases.component';
import { CartComponent, PurchaseAlertComponent, PurchaseAlertListComponent, CheckoutComponent } from './index';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ProductsModule,
    SharedModule,
  ],
  declarations: [
    PurchasesComponent,
    CartComponent,
    PurchaseAlertComponent,
    PurchaseAlertListComponent,
    CheckoutComponent,
  ],
  exports: [
    CartComponent,
    PurchaseAlertComponent,
    PurchaseAlertListComponent,
    CheckoutComponent,
  ]
})
export class PurchasesModule { }
