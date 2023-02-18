import { Component, OnInit} from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  RegisterState!: Boolean;

  constructor(private RegSwitch:SwitchService) {}

  ngOnInit():void  {
    this.RegSwitch.$LookUpRegister.subscribe((req)=>this.RegisterState =req)
  }

  OpenRegister(): void {
    this.RegisterState=true;
  }
}
