import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Core Components
import { LoggedInComponent } from './core/logged-in/logged-in.component';
import { TablesComponent } from './core/tables/tables.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { PosterItemsComponent } from './core/poster-items/poster-items.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { MenuLateralComponent } from './core/menu-lateral/menu-lateral.component';
import { MensajesComponent } from './core/mensajes/mensajes.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { SubirarchivosComponent } from './core/subirarchivos/subirarchivos.component';
import { DetallesComponent } from './core/detalles/detalles.component';

// Modules Components
import { HomeComponent } from './modules/home/home.component';
import { BallsComponent } from './modules/balls/balls.component';
import { RubbersComponent } from './modules/rubbers/rubbers.component';
import { BladesComponent } from './modules/blades/blades.component';
import { UserComponent } from './modules/user/user.component';
import { AdminComponent } from './modules/admin/admin.component';
import { Page404Component } from './modules/page404/page404.component';
import { ProductosComponent } from './modules/productos/productos.component';


// Shared Components
import { BtnSaveComponent } from './shared/btn-save/btn-save.component';
import { LocationComponent } from './shared/location/location.component';
@NgModule({
  declarations: [
    AppComponent,
    // Modules
    HomeComponent,
    UserComponent,
    AdminComponent,
    BladesComponent,
    RubbersComponent,
    BallsComponent,
    TablesComponent,
    Page404Component,
    ProductosComponent,

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
    // shared
    BtnSaveComponent,
    MensajesComponent,
    SubirarchivosComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
