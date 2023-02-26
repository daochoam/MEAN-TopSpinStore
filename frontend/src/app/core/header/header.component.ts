import { Component,OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/Switches/switch.service';

type MenuHeader = 'Home' | 'Blades' | 'Rubbers' | 'Balls' | 'Tables & Nets' | 'Admin'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginState:Boolean = false;

  HeaderMenu:Array<{ Name:MenuHeader, Router:string }> = [
    {Name:'Home',           Router:'/home'},
    {Name:'Blades',         Router:'/products'},
    {Name:'Rubbers',        Router:'/products'},
    {Name:'Balls',          Router:'/products'},
    {Name:'Tables & Nets',  Router:'/products'},
    {Name:'Admin',          Router:'/admin'}
  ]

  constructor (private LookMenu:SwitchService){}
  ngOnInit(): void {}

  ActiveMenu(Menu:MenuHeader='Home'){

  }

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
