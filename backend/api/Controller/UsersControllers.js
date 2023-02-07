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
        InitSCharacter: /^([.])/g,
        // Consecutive Special Characters:
        MultiSCharacter: /[_.-]{2,}/g,
        // Username don't finish dot character
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