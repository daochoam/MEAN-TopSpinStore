import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './Interceptors/interceptor.interceptor';

// Angular Material
import {MatSelectModule} from '@angular/material/select';

// Modules Components
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';
import { UserComponent } from './modules/user/user.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminUsersComponent } from './modules/admin-users/admin-users.component';
import { AdminProductsComponent } from './modules/admin-products/admin-products.component';
import { Page404Component } from './modules/page404/page404.component';

// Core Components
import { LoggedInComponent } from './core/logged-in/logged-in.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { MenuLateralComponent } from './core/menu-lateral/menu-lateral.component';
import { MensajesComponent } from './core/mensajes/mensajes.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { DetallesComponent } from './core/detalles/detalles.component';
import { LocationComponent } from './core/location/location.component';
import { MenuAdminComponent } from './core/menu-admin/menu-admin.component';
import { MenuUsersComponent } from './core/menu-users/menu-users.component';
import { AdminCategoryComponent } from './modules/admin-category/admin-category.component';
import { UploadfilesComponent } from './core/uploadfiles/uploadfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    // Modules
    HomeComponent,
    UserComponent,
    ProductsComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminProductsComponent,
    Page404Component,

    // Cores
    FooterComponent,
    HeaderComponent,
    JumbotronComponent,
    LoginComponent,
    RegisterComponent,
    LoggedInComponent,
    LocationComponent,
    MenuLateralComponent,
    MensajesComponent,
    DetallesComponent,
    MenuAdminComponent,
    MenuUsersComponent,
    AdminCategoryComponent,
    UploadfilesComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
