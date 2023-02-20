import { FunctionExpr } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { BladesComponent } from './modules/blades/blades.component';
import { HomeComponent } from './modules/home/home.component';
import { Page404Component } from './modules/page404/page404.component';
import { RubbersComponent } from './modules/rubbers/rubbers.component';
import { TablesComponent } from './core/tables/tables.component';
import { UserComponent } from './modules/user/user.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { SubirarchivosComponent } from './core/subirarchivos/subirarchivos.component';
import { DetallesComponent } from './core/detalles/detalles.component';


const routes: Routes = [
  {path: '',        component: HomeComponent,     pathMatch:'full'},
  {path: 'home',    component: HomeComponent,     pathMatch:'full'},
  {path: 'user',    component: UserComponent,     pathMatch:'full'},
  {path: 'admin',   component: AdminComponent,    pathMatch:'full'},
  {path: 'blades',  component: BladesComponent,   pathMatch:'full'},
  {path: 'rubbers', component: RubbersComponent,  pathMatch:'full'},
  {path: 'balls',   component: BladesComponent,   pathMatch:'full'},
  {path: 'tables',  component: TablesComponent,   pathMatch:'full'},
  {path: 'productos', component: ProductosComponent,pathMatch:'full'},
  {path: 'subirarchivos', component: SubirarchivosComponent,pathMatch:'full'},
  {path: 'detalles/:identificador', component: DetallesComponent,pathMatch:'full'},
  {path: '**',      component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
