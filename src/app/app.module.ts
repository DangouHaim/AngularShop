import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeComponent } from './fakes/fake/fake.component';
import { ProductComponent } from './products/product/product.component';
import { PurchaseAlertComponent } from './purchases/purchase-alert/purchase-alert.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HoverClassDirective } from './shared/directives/hover-class.directive';
import { PressedClassDirective } from './shared/directives/pressed-class.directive';
import { ProductListComponent } from './products/product-list/product-list.component';
import { PurchaseAlertListComponent } from './purchases/purchase-alert-list/purchase-alert-list.component';
import { CartComponent } from './purchases/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    ProductComponent,
    ButtonComponent,
    PurchaseAlertComponent,
    ProductListComponent,
    PurchaseAlertComponent,
    PurchaseAlertListComponent,
    CartComponent,
    HoverClassDirective,
    PressedClassDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
