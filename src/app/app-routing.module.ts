import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent, ProductListComponent } from './products';
import { CartComponent } from './purchases';
import { productTitleResolver } from './shared/resolvers/product-title.resolver';
import { ProcessOrderComponent } from './purchases/process-order/process-order/process-order.component';
import { CartService } from './purchases/services/cart.service';
import { map, take } from 'rxjs';
import { AdminComponent } from './admin/admin/admin.component';
import { UserService } from './shared/services/user.service';
import { AdminEditProductComponent } from './admin/admin-edit-product/admin-edit-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductComponent,
    title: productTitleResolver
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order',
    component: ProcessOrderComponent,
    canLoad: [() => inject(CartService).isEmpty().pipe(take(1), map(x => !x))],
    canActivate: [() => inject(CartService).isEmpty().pipe(take(1), map(x => !x))],
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
