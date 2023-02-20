import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';
import { SwitchService } from 'src/app/services/switch.service';
import { ValidateUserService } from 'src/app/services/validate-user.service';

declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  CC: number = 0
  Name: string = ""
  Email: string = ""
  Password: string = ""
  PasswordCheck: string = ""

  constructor(private RegSwitch: SwitchService, private Validate: ValidateUserService, private Peticion: PeticionService) { }

  ngOnInit(): void { }


  CloseRegister(): void {
    this.RegSwitch.$LookUpRegister.emit(false)
  }

  Register() {
    var ValidateCC = this.Validate.ValidateCC(this.CC.toString())
    var ValidateName = this.Validate.ValidateName(this.Name)
    var ValidateEmail = this.Validate.ValidateEmail(this.Email)
    var ValidatePassword = this.Validate.ValidatePassword(this.Password)
    if (ValidateCC[0].state == false) {

    }
    else {
      var Post = {
        Host: this.Peticion.urlLocal,
        Path: "/Users/Register",
        Payload: {}
      }
      /* POST Petition User Register*/
      this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((res: any) => {
        console.log(res);
      })
    }
  }
}
