import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/Peticion/peticion.service';
import { SwitchService } from 'src/app/services/Switches/switch.service';
import { ValidateUserService } from 'src/app/services/ValidateUser/validate-user.service';

declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  /*  REGISTER MESSAGES */
  msn_Register: string = ""
  /*  INPUT FIELDS */
  CC: string = ""
  Name: string = ""
  Email: string = ""
  Password: string = ""
  ConfirmPassword: string = ""
  /*  LOG MESSAGES */
  msn_CC: string = ""
  msn_Name: string = ""
  msn_Email: string = ""
  msn_Password: string = ""
  msn_ConfirmPassword: string = ""
  /**/

  constructor(
    // Services Calls
    private RegSwitch: SwitchService,
    private Peticion: PeticionService,
    private Validate: ValidateUserService,
  ) { }

  ngOnInit(): void { }

  /* CLEAR FIELDS */
  ClearFields(): void {
    this.CC = "", this.Name = "", this.Email = "", this.Password = "", this.ConfirmPassword = "",
      this.msn_CC = "", this.msn_Name = "", this.msn_Email = "", this.msn_Password = "", this.msn_ConfirmPassword = ""
  }

  /* BUTTON CLOSER REGISTER */
  CloseRegister(): void {
    this.RegSwitch.$LookUpRegister.emit(false)
    this.ClearFields()
    this.msn_Register = ""
  }

  /* BUTTON REGISTER */
  Register() {
    var CheckCC = this.Validate.ValidateCC(this.CC)
    var CheckName = this.Validate.ValidateName(this.Name)
    var CheckEmail = this.Validate.ValidateEmail(this.Email)
    var CheckPassword = this.Validate.ValidatePassword(this.Password)
    var CheckConfirmPassword = this.Validate.ValidateConfirmPassword(this.ConfirmPassword, this.Password)
    if (CheckCC[0].state == false
      || CheckName[0].state == false
      || CheckEmail[0].state == false
      || CheckPassword[0].state == false
      || CheckConfirmPassword[0].state == false) {
      if (CheckCC[0].state == false) {
        this.msn_CC = CheckCC[0].message
      }
      else { this.msn_CC = "" }
      if (CheckName[0].state == false) {
        this.msn_Name = CheckName[0].message
      }
      else { this.msn_Name = "" }
      if (CheckEmail[0].state == false) {
        this.msn_Email = CheckEmail[0].message
      }
      else { this.msn_Email = "" }
      if (CheckPassword[0].state == false) {
        this.msn_Password = CheckPassword[0].message
      }
      else { this.msn_Password = "" }
      if (CheckConfirmPassword[0].state == false) {
        this.msn_ConfirmPassword = CheckConfirmPassword[0].message
      }
      else { this.msn_ConfirmPassword = "" }
    }
    else {
      /** CLEAR FIELDS **/
      this.ClearFields();
      var Post = {
        Host: this.Peticion.urlLocal,
        Path: "/Users/Register",
        Payload: {
          Cedula: this.CC,
          Name: this.Name,
          Email: this.Email,
          Password: this.Password
        }
      }
      /* POST Petition User Register*/
      this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
        if (Response.state == true) {
          this.msn_Register = "User Registered Successfully"
        }
        else {
          this.msn_Register = "User Registered Successfully"
        }
      })
      /****** CLEAR FIELDS *********/

    }
  }
}
