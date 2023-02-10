var UsersModels = require(__dirname + '/../Models/UsersModels.js').users
var UsersControllers = {}

var RegexValues = {
    // Capital Letter - No Acent:
    CapitaLetter: /[A-ZÑ]/g,
    // Lowercase Letter - No Acent:
    LowercaseLetter: /[a-zñ]/g,
    // Word Characters
    WordCharacters: /[A-ÿ]/g,
    // Acent Characters:
    AcentCharacters: /À-ÿ/g,
    // Special Characters:
    SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/g,
    // Numbers:
    Numbers: /\d/g,
    // Space Characters:
    Spaces: /([\s]{1,})/g,
    // Multi-Space characters:
    MultiSpace: /[\s]{2,}/g,
}

var Form = {
    Name:{
        // Special Characters:
        SpecialCharacters: RegexValues.SpecialCharacters,
        // Word Characters
        WordCharacters: RegexValues.WordCharacters,
        // Numbers:
        Numbers: RegexValues.Numbers,
        // Multi-Space characters:
        MultiSpace: RegexValues.MultiSpace,
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
        Spaces: RegexValues.Spaces,
        // Begin Special Characters:
        InitSCharacter: /^([._-])/g,
        // Consecutive Special Characters:
        MultiSCharacter: /[_.-]{2,}/g,
        // Username don't finish special character
        CharArroba: /([_.-])(?=@)/g
    },
    Password: {
        // Acent Characters:
        AcentCharacters: RegexValues.AcentCharacters,
        // Space Characters:
        Spaces: RegexValues.Spaces,
        // CapilalLetters:
        CapitaLetter: RegexValues.CapitaLetter,
        // LowercaseLetter:
        LowercaseLetter: RegexValues.LowercaseLetter,
        // Numbers:
        Numbers: RegexValues.Numbers,
        // Special Characters:
        SpecialCharacters: RegexValues.SpecialCharacters,
        // Word Characters:
        InitSCharacter: /^([.])/g,
        // Consecutive Special Characters:
    },
    Phone: /^((60[1-8])|3(0[0-5]|1[0-9]|2[0-4]|33|5[0-1]))\d{7}/g, // Phone numbers in Colombia
}

/******************* REGISTER USER  ******************/
UsersControllers.RegisterUsers = function(req,res){
    var post = {
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Phone: req.body.Phone
    }

    /*********************************************/
    /**************** Check Name  ****************/
    // This field is required.
    if (post.Name.trim() == "" || post.Name.trim() == null || post.Name.trim() == undefined) {
        res.send({ state: false, message: 'The name field is required.' });
        return false;
    }
    // The field contain many spaces between names.
    if (RegValue.MultiSpace.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name field contain many spaces between names.' })
        return false;
    }
    // The field must not contain numbers.
    if (RegValue.Numbers.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name must not contain numbers.' })
        return false;
    }
    // The field must not contain name(s) of more than 15 characters.
    if (Math.max(...post.Name.trim().split(' ').map(p => p.length)) > 15) {
        res.send({ state: false, message: 'The name must not contain name(s) of more than 15 characters.' })
        return false;
    }
    // The field must not contain name(s) of less than 3 characters.
    if (Math.min(...post.Name.trim().split(' ').map(p => p.length)) < 3) {
        res.send({ state: false, message: 'The name must not contain name(s) of less than 3 characters.' })
        return false;
    }
    // The name must not contain special characters.
    if (RegValue.SpecialCharacters.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name must not contain special characters.' });
        return false;
    }

    /**********************************************/
    /**************** Check Email  ****************/
    // This field is required.
    if (post.Email.trim() == "" || post.Email.trim() == null || post.Email.trim() == undefined) {
        res.send({ state: false, message: 'The e-mail field is required.' })
        return false}

    // The field contain between 6 to 30 characters..
    if (6 > post.Email.match(Form.Email.UserName).length > 30) {
        res.send({ state: false, message: 'The email username must contain between 6 to 30 characters.' })
        return false}

    // The field not must contain spaces.
    if (Form.Email.Spaces.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The e-mail field not must contain spaces.' })
        return false;}

    // The field must contain only one @ character.
    if (post.Email.match(Form.Email.Symbol).length != 1) {
        res.send({ state: false, message: 'The email must contain only one @ character.' })
        return false;}

    // The field must not start with a special characters.
    if (Form.Email.InitSCharacter.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not start with a special character.' })}

    // The field must not contain consecutive special characters.
    if (Form.Email.MultiSCharacter.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not contain consecutive special characters.'})}

    // The field must not end with a period.
    if (Form.Email.CharArroba.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not end with a special character.'})}

    /*********************************************/
    /************** Check Password ***************/
    if (post.Password.trim() == "" || post.Password.trim() == null || post.Password.trim() == undefined) {
        res.send({ state: false, message: 'The e-mail field is required.' })
        return false}

    // The field must contain at least 8 characters.
    if (post.Password.length < 8) {
        res.send({ state: false, message: 'The password must contain at least 8 characters.' })
        return false}

    // The field contain spaces.
    if (Form.Password.Spaces.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The password must not contain spaces.' })
        return false}

    // 1 Number.
    if (Form.Password.Numbers.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 number.' })
        return false}

    // 1 Capital Letter.
    if (Form.Password.CapitaLetter.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 capital letter.' })
        return false}

    // 1 Lowercase Letter.
    if (Form.Password.LowercaseLetter.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 lowercase letter.' })
        return false}

    // 1 Special Character.
    if (Form.Password.SpecialCharacters.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 special character.' })
        return false}

    // The field contain acent characters.
    if (RegexForm.Password.AcentCharacters.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The password must not contain acent characters.' })
        return false}
    
    /*********************************************/
    /*********** Check Phone Number **************/
    if (post.Phone.trim() == "", post.Phone.trim() == null || post.Phone.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }
    // Check number of digits of the phone number
    if (post.Phone.trim().length != 10) {
        res.send({ state: false, message: 'Enter a 10 digit phone number' })
        return false;
    }
    if (/[^\d]/.test(post.Phone.trim()) == true) {
        res.send({ state: false, message: 'The phone number must not contain non-numeric characters.' })
        return false;
    }
    // Check that it is a Colombian phone number
    if (Form.Phone.test(post.Phone) == false) {
        res.send({ state: false, message: 'The number entered does not contain a valid phone number in Colombia.' })
        return false;
    }

}

/******************* LOGIN USER  ******************/
UsersControllers.LoginUsers = function(req,res){
    var post = {
        Email: req.body.Email,
        Password: req.body.Password
    }

    /**********************************************/
    /**************** Check Email  ****************/
    // This field is required.
    if (post.Email.trim() == "" || post.Email.trim() == null || post.Email.trim() == undefined) {
        res.send({ state: false, message: 'The e-mail field is required.' })
        return false}

    // The field contain between 6 to 30 characters..
    if (6 > post.Email.match(Form.Email.UserName).length > 30) {
        res.send({ state: false, message: 'The email username must contain between 6 to 30 characters.' })
        return false}

    // The field not must contain spaces.
    if (Form.Email.Spaces.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The e-mail field not must contain spaces.' })
        return false;}

    // The field must contain only one @ character.
    if (post.Email.match(Form.Email.Symbol).length != 1) {
        res.send({ state: false, message: 'The email must contain only one @ character.' })
        return false;}

    // The field must not start with a special characters.
    if (Form.Email.InitSCharacter.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not start with a special character.' })}

    // The field must not contain consecutive special characters.
    if (Form.Email.MultiSCharacter.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not contain consecutive special characters.'})}

    // The field must not end with a period.
    if (Form.Email.CharArroba.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not end with a special character.'})}

    /*********************************************/
    /************** Check Password ***************/
    if (post.Password.trim() == "" || post.Password.trim() == null || post.Password.trim() == undefined) {
        res.send({ state: false, message: 'The e-mail field is required.' })
        return false}

    // The field must contain at least 8 characters.
    if (post.Password.length < 8) {
        res.send({ state: false, message: 'The password must contain at least 8 characters.' })
        return false}

    // The field contain spaces.
    if (Form.Password.Spaces.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The password must not contain spaces.' })
        return false}

    // 1 Number.
    if (Form.Password.Numbers.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 number.' })
        return false}

    // 1 Capital Letter.
    if (Form.Password.CapitaLetter.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 capital letter.' })
        return false}

    // 1 Lowercase Letter.
    if (Form.Password.LowercaseLetter.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 lowercase letter.' })
        return false}

    // 1 Special Character.
    if (Form.Password.SpecialCharacters.test(post.Name.trim()) == false) {
        res.send({ state: false, message: 'The password must contain at least 1 special character.' })
        return false}

    // The field contain acent characters.
    if (RegexForm.Password.AcentCharacters.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The password must not contain acent characters.' })
        return false}
}

module.exports.users = UsersControllers