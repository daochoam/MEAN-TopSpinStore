import { FunctionExpr } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './modules/home/home.component';
import { Page404Component } from './modules/page404/page404.component';
import { UserComponent } from './modules/user/user.component';
import { DetallesComponent } from './core/detalles/detalles.component';
import { AdminUsersComponent } from './modules/admin-users/admin-users.component';
import { AdminProductsComponent } from './modules/admin-products/admin-products.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component:ProductsComponent, pathMatch: 'full'},
  { path: 'detalles/:identificador', component: DetallesComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'users', component: AdminUsersComponent, pathMatch: 'full'},
      { path: 'product', component: AdminProductsComponent, pathMatch: 'full'},
    ],
  },
  { path: 'user', component: UserComponent, pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
