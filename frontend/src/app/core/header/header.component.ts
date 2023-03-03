import { Component,OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/store-interfaces';
import { RequestCategoryService } from 'src/app/services/RequestCategory/request-category.service';
import { SwitchService } from 'src/app/services/Switches/switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ListCategory!: [Category];
  loginState:Boolean = false;

  constructor ( public RequestCategory: RequestCategoryService,
                private LookMenu:SwitchService){}
  ngOnInit(): void {
    this.LoadAllCategories()
  }

  LoadAllCategories() {
    this.RequestCategory.LoadAllCategory().then((Response: any) => {
      this.ListCategory = Response.data
    })
  }

  ActiveMenu(Menu:string='Home'){

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
