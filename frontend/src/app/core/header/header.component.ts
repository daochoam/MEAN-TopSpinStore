import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  HeaderMenu = [
    {Name:'Home',           Router:'/home'},
    {Name:'Blades',         Router:'/blades'},
    {Name:'Rubbers',        Router:'/rubbers'},
    {Name:'Balls',          Router:'/balls'},
    {Name:'Tables & Nets',  Router:'/tables'},
  ]

  loginState:Boolean = false;

    ngOnInit(): void {
  }

  LoginShow():void{
    this.loginState=!this.loginState
  }

  PrivateZone():void {
  }
}
