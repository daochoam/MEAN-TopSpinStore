import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/Peticion/peticion.service';
import { RequestUsersService } from 'src/app/services/RequestUsers/request-users.service';
import { SwitchService } from 'src/app/services/Switches/switch.service';
import { ValidateUserService } from 'src/app/services/ValidateUser/validate-user.service';
import Swal from 'sweetalert2';

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
    private RequestUsers: RequestUsersService,
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
    var CheckEmail = this.Validate.ValidateEmail(this.Email, 'Save')
    var CheckPassword = this.Validate.ValidatePassword(this.Password, 'Save')
    var CheckConfirmPassword = this.Validate.ValidateConfirmPassword(this.ConfirmPassword, this.Password)
    if (CheckCC.state == false || CheckName.state == false || CheckEmail.state == false
      || CheckPassword.state == false || CheckConfirmPassword.state == false) {
      if (CheckCC.state == false) { this.msn_CC = CheckCC.message } else { this.msn_CC = "" }
      if (CheckName.state == false) { this.msn_Name = CheckName.message } else { this.msn_Name = "" }
      if (CheckEmail.state == false) { this.msn_Email = CheckEmail.message } else { this.msn_Email = "" }
      if (CheckPassword.state == false) { this.msn_Password = CheckPassword.message } else { this.msn_Password = "" }
      if (CheckConfirmPassword.state == false) { this.msn_ConfirmPassword = CheckConfirmPassword.message } else { this.msn_ConfirmPassword = "" }
    }
    else {
      this.RequestUsers.RegisterUsers({
        Cedula: this.CC,
        Name: this.Name,
        Email: this.Email,
        Password: this.Password
      })
      /** CLEAR FIELDS **/
      this.ClearFields();
      this.RegSwitch.$LookUpRegister.emit(false)
    }
  }
}
