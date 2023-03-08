import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, UserSession } from 'src/app/interfaces/store-interfaces';
import { RequestCategoryService } from 'src/app/services/RequestCategory/request-category.service';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';
import { SwitchService } from 'src/app/services/Switches/switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /**  DECLARACIÓN DE VARIABLES  */
  LoginState: boolean = false;
  LoggedIn: boolean = false;

  ListCategory: [Category] = [{ Code: "", Name: "" }];
  UserSession: [UserSession] = [{ _id: "", Name: "" }]


  constructor(private router: Router,
    public RequestCategory: RequestCategoryService,
    public RequestUser: RequestUsersService,
    private LoginSwitch: SwitchService) { }

  ngOnInit() {
    this.LoadAllCategories()
    this.LoginSwitch.$LookUpLogin.subscribe((req) => this.LoginState = req)
    this.LoginSwitch.$LookUpLoggedIn.subscribe((req) => this.LoggedIn = req)
  }


  LoadAllCategories() {
    this.RequestCategory.LoadAllCategory().then((Response: any) => {
      this.ListCategory = Response.data
    })
  }

  ActiveMenu(Menu: string = 'Home') {

  }

  /* Hide dropdown when another dropdown is activated */
  LoginShow(): void {
    this.VerCookies()
    console.log(this.UserSession)
    console.log(this.LoginState)
    console.log(this.LoggedIn)
    if (this.UserSession[0]._id == "" || this.UserSession[0]._id == undefined || this.UserSession[0]._id == null) {
      if (this.LoginState == false) { this.LoginState = true }
      else if (this.LoginState == true) { this.LoginState = false }
    } else if (this.UserSession[0]._id != "" || this.UserSession[0]._id == undefined || this.UserSession[0]._id == null) {
      if (this.LoggedIn == false) { this.LoggedIn = true }
      else if (this.LoggedIn == true) { this.LoggedIn = false }
    }
    /* Minimize the header when activating the Login */
    let navDisplay: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (navDisplay.getAttribute('aria-expanded') == 'true') {
      navDisplay.click();
    };
  }

  NavShow(): void {
    /* Minimize the header when activating the Login */
    let navDisplay: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (navDisplay.getAttribute('aria-expanded') == 'true') {
      if (this.UserSession[0]._id == "" || this.UserSession[0]._id == undefined || this.UserSession[0]._id == null) {
        this.LoginState = false
      }
      else if (this.UserSession[0]._id != "" || this.UserSession[0]._id != undefined || this.UserSession[0]._id != null) {
        this.LoggedIn = false
      }
      navDisplay.click();
    }
  }

  PrivateZone() {
    this.VerCookies()
    if (this.UserSession[0]._id != "" || this.UserSession[0]._id == undefined || this.UserSession[0]._id == null) {
      this.LoggedIn = false
      if (this.UserSession[0].Rol == 1) { this.router.navigate(['admin']) }
      else if (this.UserSession[0].Rol == 2) { this.router.navigate(['user']) }
    }
  }



  VerCookies() {
    this.RequestUser.ViewCookie().then((response: any) => {
      if (response.state == true) {
        this.UserSession = [{
          _id: response.clave._id,
          Name: response.clave.Name,
          Rol: response.clave.Rol
        }]
      } else {
        this.UserSession = [{ _id: undefined, Name: undefined, Rol: undefined }]
      }
    })
  }

}
