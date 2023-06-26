import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: AdminComponent },
    { path: 'products/edit', component: AdminEditProductComponent },
    { path: 'products/edit/:id', component: AdminEditProductComponent, canDeactivate: [() => confirm("Are you sure you want to leave?")] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
