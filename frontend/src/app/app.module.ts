import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BallsComponent } from './Page/balls/balls.component';
import { RubbersComponent } from './Page/rubbers/rubbers.component';
import { BladesComponent } from './Page/blades/blades.component';
import { TablesComponent } from './Page/tables/tables.component';
import { UserComponent } from './Page/user/user.component';
import { AdminComponent } from './Page/admin/admin.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { PosterItemsComponent } from './Components/poster-items/poster-items.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // Project Pages
    HomeComponent,
    BallsComponent,
    RubbersComponent,
    BladesComponent,
    TablesComponent,
    UserComponent,
    AdminComponent,
    // Project Componentes
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PosterItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
