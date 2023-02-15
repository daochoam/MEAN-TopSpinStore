import { Component,OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginState:Boolean = false;

  HeaderMenu = [
    {Name:'Home',           Router:'/home'},
    {Name:'Blades',         Router:'/blades'},
    {Name:'Rubbers',        Router:'/rubbers'},
    {Name:'Balls',          Router:'/balls'},
    {Name:'Tables & Nets',  Router:'/tables'},
  ]

  constructor (){}
    ngOnInit(): void {}

  /* Hide dropdown when another dropdown is activated */
  LoginShow():void{
    this.loginState=!this.loginState
    /* Minimize the header when activating the Login */
    let navDisplay: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if ( navDisplay.getAttribute('aria-expanded') == 'true') {
      navDisplay.click();
    }
  }

  NavShow():void{
    /* Minimize the header when activating the Login */
    let navDisplay: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if ( navDisplay.getAttribute('aria-expanded') == 'true') {
      navDisplay.click();
      this.loginState=false;
    }
  }

  PrivateZone():void {
  }

}
