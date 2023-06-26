import { NgModule } from '@angular/core';

import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminEditProductComponent,
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
