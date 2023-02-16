import { Component,OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  RegForms = [
    {Name:'CC',               Type:'text',     Field:'CC'},
    {Name:'Name',             Type:'text',     Field:'Name'},
    {Name:'Email',            Type:'text',     Field:'Email'},
    {Name:'Password',         Type:'password', Field:'Password'},
    {Name:'Confirm Password', Type:'password', Field:'PasswordCheck'},
  ]

  CC:number = 0
  Name:string=''
  Email:string=''
  Password:string=''
  PasswordCheck:string=''

  constructor(private RegSwitch:SwitchService){
  }


  ngOnInit():void  {
  }


  CloseRegister(): void {
    this.RegSwitch.$LookUpRegister.emit(false)
  }

  Register(){

  }
}
