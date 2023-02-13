var ModelUsuarios = {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UsuariosSchema = new Schema({
    Name:String,
    LastName:String,
    Email:String,
    Password:String,
    ConfirmPassword:String
    })

const MyModel = mongoose.model('Users', UsuariosSchema)


/*Guardar Usuarios*/ 
ModelUsuarios.Register = function (post, callback) {

    const instancia = new MyModel
    instancia.Name = post.Name
    instancia.LastName = post.LastName
    instancia.Email = post.Email
    instancia.Password = post.Password
    instancia.ConfirmPassword = post.ConfirmPassword
    instancia.save((error, creado) => {
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true, creado})
        }
    })    
            
    
}

/*Listar todos los Usuarios*/
ModelUsuarios.LoadAllUsers = function(post, callback){
    MyModel.find({},{},(error, documentos)=> {
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true,data:documentos})
        }
    })
}

/*Listar Usuarios por email */
ModelUsuarios.LoadEmail = function(post, callback){
    MyModel.find({Email:post.Email},{},(error,documentos)=>{
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true,data:documentos})
        }    
    })
}

/*Actualizar Usuarios por Email*/
ModelUsuarios.UpdateByEmail = function(post, callback){
    MyModel.findOneAndUpdate({Email:post.Email},{
        Name:post.Name,
        LastName:post.LastName,
        Email:post.Email,
        Password:post.Password,
        ConfirmPassword:post.ConfirmPassword
    },(error, modificado)=>{
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true})
        }  

    })
}

/*Eliminar Usuarios por email*/ 
ModelUsuarios.DeleteByEmail = function(post, callback){
    MyModel.findOneAndDelete({Email:post.Email},(error, eliminado)=>{
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true})
        }      
    })
}

module.exports.usuarios = ModelUsuarios