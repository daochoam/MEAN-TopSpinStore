import { Component, OnInit } from '@angular/core';
import { UserSession } from 'src/app/interfaces/store-interfaces';
import { Router } from '@angular/router';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';
import { SwitchService } from 'src/app/services/Switches/switch.service';
import { MessagesService } from 'src/app/services/Messages/messages.service';

declare var $: any
@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  /**  DECLARACIÓN DE VARIABLES  */
  Name: UserSession["Name"] = ""
  UserSession: [UserSession] = [{ _id: "", Name: "" }]
  LoggedForm: any[] = []
  SetUser: any[] = []

  Id: string = "";
  Rol: number = 2;
  Cedula: string = "";
  LastName: string = "";
  Email: string = "";
  Age: string = "";
  Address: string = "";
  Phone: string = "";
  DataLoggedIn: any;

  constructor(private Router: Router,
    private RequestUser: RequestUsersService,
    private LoggedSwitch: SwitchService,
    private Message: MessagesService,
  ) { }

  ngOnInit(): void {
    this.VerCookies()
    this.LoadById(this.UserSession[0]._id)
  }

  LogOut(): void {
    this.RequestUser.CloseSession().then(() => {
        this.Router.navigate(['/'])
      })
    this.UserSession = [{ _id: "", Name: "" , Rol: ""}]
    this.LoggedSwitch.$LookUpLoggedIn.emit(false)
  }

  ConfigLoggedIn() {
    if (this.UserSession[0].Rol == 2) {
      this.RequestUser.NavigatePermit().then(
        (Response: any) => {
          this.DataLoggedIn = Response.Data.MenuLog
        })





      this.LoggedForm = [
        { Title: "Payment methods", Icon: "wallet", Data: '' },
        { Title: "Shipping addresses", Icon: "truck-fast", Data: this.Address },
      ]
      this.SetUser = [
        { Title: "Set password", Icon: "key" },
        { Title: "Manage account", Icon: "gear" },
        { Title: "Shopping cart", Icon: "cart-shopping" },
      ]
    } else {
      this.LoggedForm = [{ Title: "", Icon: "", Data: "" }]
      this.SetUser = [{ Title: "", Icon: "" }]
    }
  }

  LoadById(Id: string) {
    this.RequestUser.LoadById(Id)
      .then((Response: any) => {
        if (Response.state == true) {
          /******  Required Fields  ******/
          this.Rol = Response.data.Rol
          this.Name = Response.data.Name
          this.Email = Response.data.Email
          /******  Optional Fields  ******/
          if (Response.data.Address != undefined) { this.Address = Response.data.Address }
          $('#modaldatos').modal('show')
        } else {
          this.Message.load("danger", Response.message, 5000)
        }
      })
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
        this.UserSession = [{ _id: '', Name: '', Rol: '' }]
      }
    })
  }

}
