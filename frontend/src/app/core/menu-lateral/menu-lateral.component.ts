import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

  constructor(private router:Router){

  }
  datosmenu = [

    
    
    {nombre:'Usuarios', destino:'/usuarios'},
    {nombre:'productos', destino:'/productos'},
    {nombre:'servicios', destino:'/servicios'}
  ]

  CerrarSesion(){
    this.router.navigate(['/'])

  }

  
  

}
