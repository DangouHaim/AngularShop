import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products';
import { CartComponent } from './purchases';

const routes: Routes = [
  { 
    path: 'home', 
    component: ProductListComponent 
  }, 
  { 
    path: 'cart', 
    component: CartComponent 
  }, 
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  }, 
  { 
    // The router will match this route if the URL requested 
    // doesn't match any paths for routes defined in our configuration 
    path: '**', 
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
