import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  DatosMenu: any[] = [];

  constructor(private Router: Router,
    private RequestUser: RequestUsersService) { }

  ngOnInit(): void {
    this.LoadMenuBackend()
  }
  AdminMenu = [
    { nombre: 'Users', destino: 'users', icon: "user" },
    { nombre: 'Categories', destino: 'category', icon: "truck" },
    { nombre: 'Products', destino: 'products', icon: "shop" },
  ]

  LoadMenuBackend() {
    this.RequestUser.NavigatePermit().then(
      (Response: any) => {
        this.DatosMenu = Response.datos
      })
  }

  CerrarSesion() {
    this.RequestUser.CloseSession().then(
      (respuesta: any) => {
        this.Router.navigate(['/'])
      })
  }

}
