import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PurchasesModule } from './purchases/purchases.module';
import { ProductsModule } from './products/products.module';
import { httpInterceptorProviders } from './shared/interceptors';

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    PurchasesModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
