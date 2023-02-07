import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/interfaces/person';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ModaLogin:NgbModal){}

  ngOnInit():void  {}

  openRegister(register: any){
    this.ModaLogin.open(register, {windowClass:'modal-register'});
  }

}
