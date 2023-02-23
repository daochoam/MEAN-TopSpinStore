import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/Peticion/peticion.service';
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
    private RegSwitch: SwitchService,
    private Peticion: PeticionService,
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
      var Post = {
        Host: this.Peticion.urlLocal,
        Path: "/Users/Login",
        Payload: {
          Email: this.Email,
          Password: this.Password
        }
      }
      /* POST Petition User Register*/
      this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
        if (Response.state == true) {
          /** CLEAR FIELDS **/
          this.ClearFields();
        }
        else {
        }
      })
  }


}
