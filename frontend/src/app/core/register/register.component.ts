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
    {Name:'CC',               Type:'text',      Value:"",  Field:'CC'},
    {Name:'Name',             Type:'text',      Value:"", Field:'Name'},
    {Name:'Email',            Type:'text',      Value:"", Field:'Email'},
    {Name:'Password',         Type:'password',  Value:"", Field:'Password'},
    {Name:'Confirm Password', Type:'password',  Value:"", Field:'PasswordCheck'},
  ]

  CC:number = 0
  Name:string=""
  Email:string=""
  Password:string=""
  PasswordCheck:string=""

  constructor(private RegSwitch:SwitchService){
  }


  ngOnInit():void  {
    this.CC= 0;
    this.Name="";

  }


  CloseRegister(): void {
    this.RegSwitch.$LookUpRegister.emit(false)
  }

  Register(){
    console.log(this.RegForms[0]["Value"])
  }
}
