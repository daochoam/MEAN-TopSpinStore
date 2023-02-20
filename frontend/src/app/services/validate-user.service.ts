import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserService {

  constructor() {
    this.Form
  }

  RegValue = {
    // Capital Letter - No Acent:
    CapitaLetter: /[A-ZÑ]/g,
    // Lowercase Letter - No Acent:
    LowercaseLetter: /[a-zñ]/g,
    // Word Characters
    WordCharacters: /[A-ÿ]/g,
    // Acent Characters:
    AcentCharacters: /[À-ÿ]/g,
    // Special Characters:
    SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/g,
    // Numbers:
    Numbers: /\d/g,
    // Multi-Space characters:
    MultiSpace: /[\s]{2,}/g,
  }

  Form = {
    Name: {
      // Special Characters:
      SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/g,
      // Word Characters
      WordCharacters: /[A-ÿ]/g,
      // Numbers:
      Numbers: /\d/g,
      // Multi-Space characters:
      MultiSpace: /[\s]{2,}/g,
    },
    Email: {
      // Check include one @.
      Symbol: /@/g,
      // MailUserNameM (Gmail rules): Gmail!! does not include dash, underscore.
      UserName: /^((?!^[._-])(?![._-]{2,})[a-z0-9._-](?![._-])){6,30}(?=@)/g,
      // MailDomain: Check the email domain structure.
      Domain: /(?<=@)(([\w-]+\.)+[\w-]{2,4})$/g,
      // Special Characters:
      SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/g,
      // Space Characters:
      Spaces: /([\s]{1,})/g,
      // Init Special Characters:
      InitSCharacter: /^([.])/g,
      // Consecutive Special Characters:
      MultiSCharacter: /[_.-]{2,}/g,
      // Username don't finish dot character
      CharArroba: /([_.-])(?=@)/g,
      // Acent Characters:
      AcentCharacters: this.RegValue.AcentCharacters
    },
    Password: {
      // Space Characters:
      Spaces: /([\s]{1,})/g,
      // Acent Characters:
      AcentCharacters: this.RegValue.AcentCharacters,
      // Capital Letter - No Acent:
      CapitaLetter: this.RegValue.CapitaLetter,
      // Lowercase Letter - No Acent:
      LowercaseLetter: this.RegValue.LowercaseLetter,
      // Special Characters:
      SpecialCharacters: this.RegValue.SpecialCharacters,
      // Numbers:
      Numbers: this.RegValue.Numbers,
    }
  }

  /*****************************************************************************************/
  /*****************************      CC NUMBRE VALIDATE       *****************************/
  ValidateCC(Id: string): [{ state: boolean, message: string }] {
    let Value!: [{ state: boolean, message: string }]
    if (Id.trim() == "" || Id.trim() == null || Id.trim() == undefined) {
      Value = [{ state: false, message: 'The field is required.' }]
    }
    else if (6 > Id.trim().length || Id.trim().length > 10) {
      Value = [{ state: false, message: 'The field must contain 6 to 10 digits.' }];
    }
    else {
      Value = [{ state: true, message: '' }]
    }
    return Value
  }

  /*****************************************************************************************/
  /*****************************    NAME & LASTNAME VALIDATE   *****************************/
  ValidateName(Names: string): any[] {
    var Value = []

    // This field is required.
    if (Names.trim() == "" || Names.trim() == null || Names.trim() == undefined) {
      Value.push({ state: false, message: 'The field is required.' })
    }
    else {
      // The field contain many spaces between names.
      if (this.Form.Name.MultiSpace.test(Names.trim()) == true) {
        Value.push({ state: false, message: 'The field contain many spaces between names.' });
      }

      // The field must not contain numbers.
      if (this.Form.Name.Numbers.test(Names.trim()) == true) {
        Value.push({ state: false, message: 'The field contain numbers.' });
      }

      // The field must not contain name(s) of more than 15 characters.
      if (Math.max(...Names.trim().split(' ').map(p => p.length)) > 15) {
        Value.push({ state: false, message: 'The field contain name(s) of more than 15 characters.' });
      }

      // The field must not contain name(s) of less than 3 characters.
      if (Math.min(...Names.trim().split(' ').map(p => p.length)) < 3) {
        Value.push({ state: false, message: 'The field contain name(s) of less than 3 characters.' });
      }

      // The name must not contain special characters..
      if (this.Form.Name.SpecialCharacters.test(Names.trim()) == true) {
        Value.push({ state: false, message: 'The field contain special characters.' });
      }
    }

    if (Value.length != 0) {
      return Value
    } else {
      Value.push({ state: true, message: '' })
      return Value
    }
  }

  /*****************************************************************************************/
  /*****************************    NAME & LASTNAME VALIDATE   *****************************/
  ValidateEmail(Mail: string): any[] {
    var Value = []

    // This field is required.
    if (Mail.trim() == "" || Mail.trim() == null || Mail.trim() == undefined) {
      Value.push({ state: false, message: 'The field is required.' })
    }
    else {
      // The field must contain @ symbol.
      if (Mail.match(this.Form.Email.Symbol)?.length != 1) {
        Value.push({ state: false, message: "The field must contain one @ symbol." });
      }

      // The field contain spaces.
      if (this.Form.Email.Spaces.test(Mail.trim()) == true) {
        Value.push({ state: false, message: "The field musn't contain spaces." });
      }

      // The field must not start with a special characters.
      if (this.Form.Email.InitSCharacter.test(Mail.trim()) == true) {
        Value.push({ state: false, message: "The email username musn't start with a special character." });
      }

      // The field must not start with a special characters.
      if (this.Form.Email.MultiSCharacter.test(Mail.trim()) == true) {
        Value.push({ state: false, message: "The email username musn't contain consecutive special characters." });
      }

      // The field must not end with a period.
      if (this.Form.Email.CharArroba.test(Mail.trim()) == true) {
        Value.push({ state: false, message: "The email username musn't end with special characters." });
      }

      // The field must not end with a period.
      if (this.Form.Email.UserName.test(Mail.trim()) == false) {
        Value.push({ state: false, message: "The email username musn't end with special characters." });
      }

    }

    if (Value.length != 0) {
      return Value
    } else {
      Value.push({ state: true, message: '' })
      return Value
    }
  }

  /*****************************************************************************************/
  /*****************************    NAME & LASTNAME VALIDATE   *****************************/
  ValidatePassword(Password: string): [{state: boolean, message:string}] {
    var msn:string = ""

    // This field is required.
    if (Password.trim() == "" || Password.trim() == null || Password.trim() == undefined) {
        msn += "The field is required."
    }
    else {
      // The field contain spaces.
      if (this.Form.Password.Spaces.test(Password.trim()) == true) {
        msn += "The field musn't contain spaces.";
      }

      // The field contain acent characters.
      if (this.Form.Password.AcentCharacters.test(Password.trim()) == true) {
        msn += "The password mustn't contain acent characters.";
      }

      // The field contain 1 capial letter.
      if (this.Form.Password.CapitaLetter.test(Password.trim()) == false) {
        msn += "The password must contain at least 1 capital letter."
      }

      // The field contain 1 lowercase letter.
      if (this.Form.Password.LowercaseLetter.test(Password.trim()) == false) {
        msn += "The password must contain at least 1 lowercase letter."
      }

      // The field contain 1 number.
      if (this.Form.Password.Numbers.test(Password.trim()) == false) {
        msn += "The password must contain at least 1 number."
      }

      // The field contain 1 special character.
      if (this.Form.Password.SpecialCharacters.test(Password.trim()) == false) {
        msn += "The password must contain at least 1 special character."
      }

    }

    if (msn != "") {
      return [{ state: false, message:msn }];
    } else {
      return [{ state: true, message:msn }]
    }
  }

}
