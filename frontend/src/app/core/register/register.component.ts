import { Component,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public ModalReg:NgbModal){}

  ngOnInit(){
    this.ModalReg.open({
      component: LoginComponent
    });
  }
  close(){
    this.ModalReg.dismissAll();
  }

}
