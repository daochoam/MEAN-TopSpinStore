import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PosterItemComponent } from './components/poster-item/poster-item.component';
import { PageBallsComponent } from './components/page-balls/page-balls.component';
import { BallsComponent } from './Page/balls/balls.component';
import { RubbersComponent } from './Page/rubbers/rubbers.component';
import { BladesComponent } from './Page/blades/blades.component';
import { TablesComponent } from './Page/tables/tables.component';
import { UserComponent } from './Page/user/user.component';
import { AdminComponent } from './Page/admin/admin.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { PosterItemsComponent } from './Components/poster-items/poster-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PosterItemComponent,
    PageBallsComponent,
    BallsComponent,
    RubbersComponent,
    BladesComponent,
    TablesComponent,
    UserComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
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
