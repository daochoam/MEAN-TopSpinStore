import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';
import { SwitchService } from 'src/app/services/Switches/switch.service';
import { ValidateUserService } from 'src/app/services/ValidateUser/validate-user.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  RegisterState!: Boolean;
  /*  LOGIN FORM MESSAGES */
  msn_Register: string = ""
  /*  INPUT FIELDS */
  Email: string = ""
  Password: string = ""
  /*  LOGIN MESSAGES */
  msn_Email: string = ""
  msn_Password: string = ""
  /**/

  constructor(
    // Services Calls
    private router:Router,
    private RegSwitch: SwitchService,
    private RequestUsers: RequestUsersService,
    private Validate: ValidateUserService,
  ) { }


  ngOnInit(): void {
    this.RegSwitch.$LookUpRegister.subscribe((req) => this.RegisterState = req)
  }

  /* OPEN REGISTER FORM */
  OpenRegister(): void {
    this.RegisterState = true;
  }

  /* CLEAR FIELDS */
  ClearFields(): void {
    this.Email = "", this.Password = "",
    this.msn_Email = "", this.msn_Password = ""
  }

  Login() {
    //this.router.navigate(['/Admin']);
    var CheckEmail = this.Validate.ValidateEmail(this.Email)
    var CheckPassword = this.Validate.ValidatePassword(this.Password)
    if (CheckEmail.state == false || CheckPassword.state == false) {
      if (CheckEmail.state == false) { this.msn_Email = CheckEmail.message } else { this.msn_Email = "" }
      if (CheckPassword.state == false) { this.msn_Password = CheckPassword.message } else { this.msn_Password = "" }}
    this.RequestUsers.LoadAllUsers().then((Users:any) => {console.log(Users.data)});
    }

  }
