import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BallsComponent } from './modules/balls/balls.component';
import { RubbersComponent } from './modules/rubbers/rubbers.component';
import { BladesComponent } from './modules/blades/blades.component';
import { TablesComponent } from './modules/tables/tables.component';
import { UserComponent } from './modules/user/user.component';
import { AdminComponent } from './modules/admin/admin.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { PosterItemsComponent } from './core/poster-items/poster-items.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { Page404Component } from './modules/page404/page404.component';
import { BtnSaveComponent } from './shared/btn-save/btn-save.component';
import { IcoLoginComponent } from './shared/ico-login/ico-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggedInComponent } from './core/logged-in/logged-in.component';
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
    // Cores
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LoggedInComponent,
    RegisterComponent,
    PosterItemsComponent,
    LocationComponent,
    // shared
    BtnSaveComponent,
    IcoLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
