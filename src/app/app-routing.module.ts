import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent, ProductListComponent } from './products';
import { CartComponent, CheckoutComponent } from './purchases';
import { productTitleResolver } from './shared/resolvers/product-title.resolver';
import { ProcessOrderComponent } from './purchases/process-order/process-order/process-order.component';
import { CartService } from './purchases/services/cart.service';
import { map, take } from 'rxjs';
import { UserService } from './shared/services/user.service';

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
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canLoad: [() => inject(UserService).isAdmin()],
    canActivate: [() => inject(UserService).isAdmin()],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
