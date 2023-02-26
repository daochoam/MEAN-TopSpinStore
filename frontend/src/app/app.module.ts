import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './Interceptors/interceptor.interceptor';

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
import { PosterItemsComponent } from './core/poster-items/poster-items.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { MenuLateralComponent } from './core/menu-lateral/menu-lateral.component';
import { MensajesComponent } from './core/mensajes/mensajes.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { DetallesComponent } from './core/detalles/detalles.component';
import { LocationComponent } from './core/location/location.component';


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
    PosterItemsComponent,
    LocationComponent,
    MenuLateralComponent,
    MensajesComponent,
    DetallesComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
