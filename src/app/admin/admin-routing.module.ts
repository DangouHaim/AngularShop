import { NgModule, inject } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { AdminComponent } from './admin/admin.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';

const routes: Routes = [
    {
        path: 'admin',
        canLoad: [() => inject(UserService).isAdmin()],
        canActivate: [() => inject(UserService).isAdmin()],
        children: [
          { path: '', redirectTo: 'products', pathMatch: 'full' },
          { path: 'products', component: AdminComponent },
          { path: 'products/edit', component: AdminEditProductComponent },
          { path: 'products/edit/:id', component: AdminEditProductComponent, canDeactivate: [() => confirm("Are you sure you want to leave?")] }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
