var ModelUsuarios = require(__dirname + '/../modelos/modelusuarios.js').usuarios
var UsuariosController = {}
const emailValidator = require ('email-validator')

UsuariosController.Register = function(request, response){
    console.log('conexion')
    var post = {
        
        Cedula:request.body.Cedula,
        Name:request.body.Name,
        Email:request.body.Email,
        Password:sha256(request.body.Password + config.Clave),

    }
    /*Validacion campo cedula */   
    
    if (post.Cedula == "" || post.Cedula==null || post.Cedula == undefined ){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    if( isNaN(post.Cedula) ) {
        response.json({state:false,mensaje:"El campo cedula solo acepta valores numericos"})
        return false;
    }

    if (post.Cedula.length < 8){
        response.json({state:false,mensaje:"El campo cedula debe ser superior a 7 digitos"})
        return false
    }

    if (post.Cedula.length > 12){
        response.json({state:false,mensaje:"El campo cedula no debe ser superior a 12 digitos"})
        return false
    }

    /*Validacion campo nombre */   
    
    if (post.Name == "" || post.Name==null || post.Name == undefined ){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.Name.length <= 2){
        response.json({state:false,mensaje:"El campo nombre debe ser superior a 2 caracteres"})
        return false
    }
    if (post.Name.length > 15){
        response.json({state:false,mensaje:"El campo nombre no debe ser superior a 15 caracteres"})
        return false
    }

    /*Validacion campo email */   

    if (post.Email == "" || post.Email==null || post.Email == undefined ){
        response.json({state:false,mensaje:"El campo email es obligatorio"})
        return false
    }

    if(emailValidator.validate(post.Email)==false){
        response.json({state:false,mensaje:"El campo Email no es correcto"})
        return false    
    }

    /*Validacion campo password */   

    if (post.Password == "" || post.Password==null || post.Password == undefined ){
        response.json({state:false,mensaje:"El campo password es obligatorio"})
        return false
    }
    if (post.Password.length < 6){
        response.json({state:false,mensaje:"El campo password debe ser superior a 6 caracteres"})
        return false
    }


    ModelUsuarios.Register(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se guardo correctamente"})
        }
        else{
            response.json({state:false,mensaje:"El correo o cedula ya existe"})
        }
        
    })

} 

UsuariosController.LoadAllUsers = function(request, response){
    ModelUsuarios.LoadAllUsers(null, function(respuesta){
        response.json(respuesta)
    })  
}

UsuariosController.LoadByDocument = function(request, response){
    console.log('conexion')
    var post = {
        Cedula:request.body.Cedula,
        
    }

    if (post.Cedula ==  "" || post.Cedula == undefined || post.Cedula == null){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    ModelUsuarios.LoadByDocument(post,function(respuesta){
        response.json(respuesta)
    })
}

UsuariosController.UpdateByDocument = function(request, response){
    var post = {
        Cedula:request.body.Cedula,
        Name:request.body.Name,
        Email:request.body.Email,
        Password:sha256(request.body.Password + config.Clave),
        
    }
    
    /*Validacion campo cedula */

    if (post.Cedula == "" || post.Cedula==null || post.Cedula == undefined ){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    if( isNaN(post.Cedula) ) {
        response.json({state:false,mensaje:"El campo cedula solo acepta valores numericos"})
        return false;
    }

    if (post.Cedula.length < 8){
        response.json({state:false,mensaje:"El campo cedula debe ser superior a 7 digitos"})
        return false
    }

    if (post.Cedula.length > 12){
        response.json({state:false,mensaje:"El campo cedula no debe ser superior a 12 digitos"})
        return false
    }

    /*Validacion campo nombre */   
    
    if (post.Name == "" || post.Name==null || post.Name == undefined ){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.Name.length <= 2){
        response.json({state:false,mensaje:"El campo nombre debe ser superior a 2 caracteres"})
        return false
    }
    if (post.Name.length > 15){
        response.json({state:false,mensaje:"El campo nombre no debe ser superior a 15 caracteres"})
        return false
    }

    /*Validacion campo email */   

    if (post.Email == "" || post.Email==null || post.Email == undefined ){
        response.json({state:false,mensaje:"El campo email es obligatorio"})
        return false
    }

    if(emailValidator.validate(post.Email)==false){
        response.json({state:false,mensaje:"El campo Email no es correcto"})
        return false    
    }

    /*Validacion campo password */   

    if (post.Password == "" || post.Password==null || post.Password == undefined ){
        response.json({state:false,mensaje:"El campo password es obligatorio"})
        return false
    }
    if (post.Password.length < 6){
        response.json({state:false,mensaje:"El campo password debe ser superior a 6 caracteres"})
        return false
    }

   

    ModelUsuarios.UpdateByDocument(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se actualizó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"La cedula no exixte"})
        }
    })

}

UsuariosController.DeleteByDocument = function(request, response){
    var post = {
        Cedula:request.body.Cedula,
        
    }

    /*Validacion campo cedula */

    if (post.Cedula == "" || post.Cedula==null || post.Cedula == undefined ){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    if( isNaN(post.Cedula) ) {
        response.json({state:false,mensaje:"El campo cedula solo acepta valores numericos"})
        return false;
    }

    if (post.Cedula.length < 8){
        response.json({state:false,mensaje:"El campo cedula debe ser superior a 7 digitos"})
        return false
    }

    if (post.Cedula.length > 12){
        response.json({state:false,mensaje:"El campo cedula no debe ser superior a 12 digitos"})
        return false
    }

    ModelUsuarios.DeleteByDocument(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se eliminó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"La cedula no exixte"})
        }
    })
}

UsuariosController.Login = function(request, response){
    var post = {
        Email:request.body.Email,
        Password:sha256(request.body.Password + config.Clave)
    }

    /*Validacion campo email */   

    if (post.Email == "" || post.Email==null || post.Email == undefined ){
        response.json({state:false,mensaje:"El campo email es obligatorio"})
        return false
    }

    if(emailValidator.validate(post.Email)==false){
        response.json({state:false,mensaje:"El campo Email no es correcto"})
        return false    
    }

    /*Validacion campo password */   

    if (post.Password == "" || post.Password==null || post.Password == undefined ){
        response.json({state:false,mensaje:"El campo password es obligatorio"})
        return false
    }
    if (post.Password.length < 6){
        response.json({state:false,mensaje:"El campo password debe ser superior a 6 caracteres"})
        return false
    }
    
    ModelUsuarios.Login(post, function(respuesta){
    response.json(respuesta) 
    })
}

module.exports.usuarios = UsuariosController