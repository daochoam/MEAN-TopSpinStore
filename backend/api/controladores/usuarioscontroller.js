var ModelUsuarios = require(__dirname + '/../modelos/modelusuarios.js').usuarios
var UsuariosController = {}
const emailValidator = require ('email-validator')
//var trimStart = require('string.prototype.trimstart')
//var trimEnd = require('string.prototype.trimend')



UsuariosController.Register = function(request, response){
    console.log('conexion')
    var post = {
        
        Cedula:request.body.Cedula.trimStart().trimEnd(),
        Name:request.body.Name.trimStart().trimEnd(),
        Email:request.body.Email.trimStart().trimEnd(),
        Password:sha256(request.body.Password + config.Clave).trimStart().trimEnd(),

    }
    /*Validacion campo cedula */   
    

    if (post.Cedula == "" || post.Cedula==null || post.Cedula == undefined){
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

    if (post.Email == "" || post.Email==null || post.Email == undefined){
        response.json({state:false,mensaje:"El campo email es obligatorio"})
        return false
    }

    if(emailValidator.validate(post.Email)==false){
        response.json({state:false,mensaje:"El campo Email no es correcto"})
        return false    
    }

    /*Validacion campo password */   

    if (post.Password == "" || post.Password==null || post.Password == undefined){
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
        Cedula:request.body.Cedula.trimStart().trimEnd(),
    }

    if (post.Cedula == "" || post.Cedula==null || post.Cedula == undefined){
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
    ModelUsuarios.LoadByDocument(post,function(respuesta){
        if(respuesta.state == true){
            response.json({respuesta,mensaje:"Se cargo correctamente"})
        }
        else{
            response.json({state:false,mensaje:"El documento no exixte"})
        }
    })
}

UsuariosController.UpdateByDocument = function(request, response){
    var post = {
        Cedula:request.body.Cedula.trimStart().trimEnd(),
        Name:request.body.Name.trimStart().trimEnd(),
        Password:sha256(request.body.Password + config.Clave).trimStart().trimEnd(),
        
    }
    
    /*Validacion campo cedula */

    if (post.Cedula == "" || post.Cedula==null || post.Cedula == undefined){
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
    
    if (post.Name == "" || post.Name==null || post.Name == undefined){
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

    
    /*Validacion campo password */   

    if (post.Password == "" || post.Password==null || post.Password == undefined){
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
        Cedula:request.body.Cedula.trimStart().trimEnd(),
        
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

    if (post.Email == "" || post.Email==null || post.Email == undefined){
        response.json({state:false,mensaje:"El campo email es obligatorio"})
        return false
    }

    if(emailValidator.validate(post.Email)==false){
        response.json({state:false,mensaje:"El campo Email no es correcto"})
        return false    
    }

    ModelUsuarios.Login(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){

            request.session.Name = respuesta.data[0].Name
            request.session.Rol = respuesta.data[0].Rol
            request.session._id = respuesta.data[0]._id
           

            response.json({state:true,mensaje:"Bienvenido"})
        }else{
            response.json({state:false,mensaje:"Usuario o password invalido"})
        }
    })
}

module.exports.usuarios = UsuariosController