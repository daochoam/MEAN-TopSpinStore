import { Component, OnInit } from '@angular/core';
import { Users, maritalStatus, NamesFormat } from 'src/app/interfaces/store-interfaces';
import { MessagesService } from 'src/app/services/Messages/messages.service';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';

declare var $: any;
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {
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
  ListaDatos!: [Users];

  MaritalS: Array<{ value: maritalStatus }> = [
    { value: 'Soltero(a)' }, { value: 'Casado(a)' }, { value: 'Separado(a)' }, { value: 'Divorciado(a)' }, { value: 'Union Libre' }, { value: 'Viudo(a)' }
  ];

  Roles: Array<{ name: string, value: number }> = [
    { name: 'Manager', value: 1 }, { name: 'Customer', value: 2 }
  ]

  constructor(private RequestUser: RequestUsersService,
    private Message: MessagesService,) { }

  ngOnInit(): void {
    this.RequestUser.LoadAllUsers().then((res: any) => { this.ListaDatos = res.data })
  }

  /*************** MODAL *****************/
  OpenModal() {
    $('#modaldatos').modal('handleUpdate')
    $('#modaldatos').modal('show')

  }

  CloseModal() {
    $('#modaldatos').modal('hide')
    this.New()
  }

  /*************** BUTTON NUEVO *****************/
  New() {
    this.Rol = 2
    this.Cedula = ""
    this.Name = ""
    this.LastName = ""
    this.Email = ""
    this.Age = ""
    this.MaritalStatus = ''
    this.Phone = ""
    this.Address = ""
    this.Id = ""
  }

  CargaPorId(Id: string) {
    this.Id = Id
    this.RequestUser.LoadById(Id)
      .then((Response: any) => {
        if (Response.state == true) {
          this.Rol = Response.data.Rol,
            this.Cedula = Response.data.Cedula,
            this.Name = Response.data.Name,
            this.LastName = Response.data.LastName,
            this.Email = Response.data.Email,
            this.Age = Response.data.Age,
            this.Phone = Response.data.Phone,
            this.Address = Response.data.Address,
            $('#modaldatos').modal('show')
        } else {
          this.Message.load("danger", Response.data.mensaje, 5000)
        }
      })
  }
  /*************** BUTTON GUARDAR *****************/
  Guardar() {
    this.RequestUser.UsersSave({
      Cedula: this.Cedula,
      Name: NamesFormat(this.Name),
      LastName: NamesFormat(this.LastName),
      Email: this.Email
    }).then(() => {
      this.RequestUser.LoadAllUsers().then((res: any) => { this.ListaDatos = res.data })
      this.New()
    })
  }

  /*************** BUTTON ACTUALIZAR *****************/
  Actualizar() {
    console.log("Actualizar")
    this.RequestUser.UpdateById({
      _id: this.Id,
      Rol: this.Rol,
      Cedula: this.Cedula,
      Name: this.Name.trim(),
      LastName: this.LastName,
      Email: this.Email.trim(),
      Age: this.Age,
      Phone: this.Phone,
      Address: this.Address,
    }).then(() => {
      this.RequestUser.LoadAllUsers().then((res: any) => { this.ListaDatos = res.data })
      this.New()
    })
  }

  /***************  BUTTON ELIMINAR  ******************/
  Eliminar() {
    this.Message.MessageDelete().then((willDelete) => {
      if (willDelete.isConfirmed) {
        this.Message.MessageOne('Deleted!', 'The product has been successfully removed.', 'center', 'success', 1000, false)
        this.RequestUser.DeleteById(this.Id).then(() => {
          this.RequestUser.LoadAllUsers().then((res: any) => { this.ListaDatos = res.data })
          this.New()
          $('#modaldatos').modal('hide')
        })
      }
    })
  }
}
