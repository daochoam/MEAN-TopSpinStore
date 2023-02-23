var ModelUsuarios = {}
const { response } = require('express');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//var trimStart = require('string.prototype.trimstart')
//var trimEnd = require('string.prototype.trimend')

var UsuariosSchema = new Schema({
    Cedula:{
        type: Number,
        unique: true
    },
    Name: String,
    Email:{
        type: String,
        unique: true
    },
    Password: String,
    Rol:Number
})

const MyModel = mongoose.model('Users', UsuariosSchema)


/*Guardar Usuarios*/
ModelUsuarios.Register = function (post, callback) {

    MyModel.find({Email:post.Email.toLowerCase()}, {}, (error, documentos) => {
        if (documentos.length > 0) {
            return callback({ state: false, data: error })
        }
        MyModel.find({ Cedula: post.Cedula }, {}, (error, documentos) => {
            if (documentos.length > 0) {
                return callback({ state: false, data: error })
            }
            else {
                const instancia = new MyModel
                instancia.Cedula = parseInt(post.Cedula)
                instancia.Name =  post.Name
                instancia.Email = post.Email.toLowerCase()
                instancia.Password = post.Password
                instancia.Rol = '2'
                instancia.save((error, creado) => {
                    return callback({ state: true, creado })
                })
            }

        })
    })
    


}

/*Listar todos los Usuarios*/
ModelUsuarios.LoadAllUsers = function (post, callback) {
    MyModel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, data: error })
        }
        else {
            return callback({ state: true, data: documentos })
        }
    })
}

/*Listar Usuarios por email */
ModelUsuarios.LoadByDocument = function (post, callback) {
    MyModel.find({ Cedula: post.Cedula }, {}, (error, documentos) => {
        if (documentos.length > 0) {
            if (error) {
                return callback({ state: false, data: error })
            }
            else {
                return callback({ state: true, data: documentos })
            }
        } else {
            return callback({ state: false })
        }
    })
}







/*Actualizar Usuarios por Email*/
ModelUsuarios.UpdateByDocument = function (post, callback) {
    MyModel.find({ Cedula: post.Cedula }, {}, (error, documentos) => {
        if (error)
            return callback({ state: true, error })
        else {
            if (documentos.length > 0) {
                MyModel.findByIdAndUpdate(documentos[0]._id, {
                    Name: post.Name.trimStart().trimEnd(),
                    Password: post.Password.trimStart().trimEnd(),
                }, (error, usuariomodificado) => {
                    if (error) {
                        console.log(error)
                        return callback({ state: false, mensaje: error })
                    }
                    else {
                        return callback({ state: true })
                    }
                })
            }
            else {
                return callback({ state: false })
            }
        }  // return callback({cantidad:documentos.length})
    })
}    
/*Eliminar Usuarios por Cedula*/
ModelUsuarios.DeleteByDocument = function (post, callback) {
    MyModel.find({ Cedula: post.Cedula }, {}, (error, documentos) => {
        if (documentos.length == 0)
            return callback({ state: false, error })
        else {
            {

                MyModel.findOneAndDelete(post.Cedula, (error, eliminado) => {
                    if (error) {
                        return callback({ state: false, data: error })
                    }
                    else {
                        return callback({ state: true })
                    }
                })
            }
        }
    })
}

/*Login Usuarios */

    
        
ModelUsuarios.Login = function (post, callback) {
    MyModel.find({Email:post.Email,Password:post.Password}, {Name:1, Rol:1}, (error, documentos) => {
        if (error) {
            return callback({ state: false, mensaje: error })
        }
        else {
            if (documentos.length == 0) {
                return callback({ state: false, mensaje:"Datos invalidos"})
            }
            else {
                return callback({ state: true, data:documentos})
            }
        }
    })
}
module.exports.usuarios = ModelUsuarios