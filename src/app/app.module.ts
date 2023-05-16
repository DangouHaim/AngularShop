import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeComponent } from './fakes/fake/fake.component';
import { ProductComponent } from './products/product/product.component';
import { PurchaseAlertComponent } from './purchases/purchase-alert/purchase-alert.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { PurchaseAlertListComponent } from './purchases/purchase-alert-list/purchase-alert-list.component';
import { CartComponent } from './purchases/cart/cart.component';
import { SharedModule } from './shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    ProductComponent,
    PurchaseAlertComponent,
    ProductListComponent,
    PurchaseAlertComponent,
    PurchaseAlertListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
