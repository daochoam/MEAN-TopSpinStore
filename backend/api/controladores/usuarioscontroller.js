var ModelUsuarios = require(__dirname + '/../modelos/modelusuarios.js').usuarios
var UsuariosController = {}

    

    


UsuariosController.Register = function(request, response){
    var post = {
        Name:request.body.Name,
        LastName:request.body.LastName,
        Email:request.body.Email,
        Password:request.body.Password,
        ConfirmPassword:request.body.ConfirmPassword

    }
 
    if (post.Name ==  "" || post.Name == undefined || post.Name == null){
        response.json({state:false,mensaje:"El campo Nombre es obligatorio"})
        return false
    }
    
    if (post.LastName ==  "" || post.LastName == undefined || post.LastName == null){
        response.json({state:false,mensaje:"El campo Apellido es obligatorio"})
        return false
    }


    if (post.Email ==  "" || post.Email == undefined || post.Email == null){
        response.json({state:false,mensaje:"El campo Email es obligatorio"})
        return false
    }
   

    if (post.Password ==  "" || post.Password == undefined || post.Password == null){
        response.json({state:false,mensaje:"El campo Password es obligatorio"})
        return false
    }

    if (post.ConfirmPassword ==  "" || post.ConfirmPassword == undefined || post.ConfirmPassword == null){
        response.json({state:false,mensaje:"El campo Confirmar Password es obligatorio"})
        return false
    }

    ModelUsuarios.Register(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se guardo correctamente"})
        }
        else{
            response.json({state:false,mensaje:"error al guardar"})
        }
    })
 

}

UsuariosController.LoadAllUsers = function(request, response){
    ModelUsuarios.LoadAllUsers(null, function(respuesta){
        response.json(respuesta)
    })  
}

UsuariosController.LoadEmail = function(request, response){
    var post = {
        Email:request.body.Email,
    }

    if (post.Email ==  "" || post.Email == undefined || post.Email == null){
        response.json({state:false,mensaje:"El campo Email es obligatorio"})
        return false
    }
    ModelUsuarios.LoadEmail(post,function(respuesta){
        console.log(respuesta)
        response.json(respuesta)
    })
}

UsuariosController.UpdateByEmail = function(request, response){
    var post = {
        Email:request.body.Email,
        Name:request.body.Name,
        LastName:request.body.LastName,
        Password:request.body.Password,
        ConfirmPassword:request.body.ConfirmPassword
    }

    if (post.Email ==  "" || post.Email == undefined || post.Email == null){
        response.json({state:false,mensaje:"El campo Email es obligatorio"})
        return false
    }

    if (post.Name ==  "" || post.Name == undefined || post.Name == null){
        response.json({state:false,mensaje:"El campo Nombre es obligatorio"})
        return false
    }
    
    if (post.LastName ==  "" || post.LastName == undefined || post.LastName == null){
        response.json({state:false,mensaje:"El campo Apellido es obligatorio"})
        return false
    }

    
    if (post.Password ==  "" || post.Password == undefined || post.Password == null){
        response.json({state:false,mensaje:"El campo Password es obligatorio"})
        return false
    }

    if (post.ConfirmPassword ==  "" || post.ConfirmPassword == undefined || post.ConfirmPassword == null){
        response.json({state:false,mensaje:"El campo Confirmar Password es obligatorio"})
        return false
    }

    ModelUsuarios.UpdateByEmail(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se actualizó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"error al actualizar"})
        }
    })

}

UsuariosController.DeleteByEmail = function(request, response){
    var post = {
        Email:request.body.Email,
        
    }

    if (post.Email==  "" || post.Email== undefined || post.Email== null){
        response.json({state:false,mensaje:"El campo Email es obligatorio"})
        return false
    }
    ModelUsuarios.DeleteByEmail(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se eliminó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"error al eliminar"})
        }
    })
}

module.exports.usuarios = UsuariosController