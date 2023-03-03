import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  DatosMenu: any[] = [];

  constructor(private router: Router,
    private RequestUser: RequestUsersService) {

  }
  AdminMenu = [
    { nombre: 'Users', destino: 'users', icon: "user" },
    { nombre: 'Categories', destino: 'category', icon: "truck" },
    { nombre: 'Products', destino: 'products', icon: "shop" },
  ]

  LoadMenuBackend() {
    this.RequestUser.NavigatePermit().then(
      (respuesta: any) => {
        this.DatosMenu = respuesta.datos
      })
  }

  CerrarSesion() {
    this.RequestUser.CloseSession().then(
      (respuesta: any) => {
        this.router.navigate(['/'])
      })
  }

}
