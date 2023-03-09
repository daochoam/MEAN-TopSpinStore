import { Component, OnInit} from '@angular/core';
import { Users, maritalStatus, NamesFormat, UserSession } from 'src/app/interfaces/store-interfaces';
import { MessagesService } from 'src/app/services/Messages/messages.service';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';

declare var $: any;
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  /**  DECLARACIÓN DE VARIABLES  */
  Id: string = "";
  Rol: number = 2;
  Cedula: string = "";
  Name: string = "";
  LastName: string = "";
  Email: string = "";
  Password: string = "";
  Age: string = "";
  Address: string = "";
  Phone: string = "";
  MaritalStatus: maritalStatus = "";
  UserSession: [UserSession] = [{ User_id: "", Name: "" }]
ConfirmPassword: any;

  constructor(public RequestUser: RequestUsersService,
  private Message: MessagesService,) { }

  ngOnInit(): void {
    this.VerCookies()
  }

  LoadById(Id: string) {
    this.Id = Id
    this.RequestUser.LoadById(Id)
      .then((Response: any) => {
        if (Response.state == true) {
          /******  Required Fields  ******/
          this.Rol = Response.data.Rol
          this.Cedula = Response.data.Cedula
          this.Name = Response.data.Name
          this.Email = Response.data.Email
          /******  Optional Fields  ******/
          if (Response.data.LastName != undefined) { this.LastName = Response.data.LastName }
          if (Response.data.Age != undefined) { this.Age = Response.data.Age }
          if (Response.data.Phone != undefined) { this.Phone = Response.data.Phone }
          if (Response.data.Address != undefined) { this.Address = Response.data.Address }
          $('#modaldatos').modal('show')
        } else {
          this.Message.load("danger", Response.data.mensaje, 5000)
        }
      })
  }

  UpdateById() {
    this.RequestUser.UpdateById({
      _id: this.Id,
      Cedula: this.Cedula,
      Name: this.Name.trim(),
      LastName: this.LastName,
      Email: this.Email.trim(),
      Age: this.Age,
      Phone: this.Phone,
      Address: this.Address,
    }).then((Response: any) => {
      if (Response.state == true) {
        this.Message.load("success", Response.mensaje, 5000)
        this.LoadById(this.UserSession[0].User_id)
        $('#modaldatos').modal('hide')
      }
      else {
        this.Message.load("danger", Response.mensaje, 5000)
      }
    })
  }

  VerCookies() {
    this.RequestUser.ViewCookie().then((response: any) => {
      if (response.state == true) {
        this.UserSession = [{
          User_id: response.clave.User_id,
          Name: response.clave.Name,
          Rol: response.clave.Rol
        }]
      } else {
        this.UserSession = [{ User_id: '', Name: '', Rol: '' }]
      }
    })
  }
}
