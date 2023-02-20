var ModelUsuarios = {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UsuariosSchema = new Schema({
    Name: String,
    LastName: String,
    Cedula:{
        type: Number,
        unique: true
    },
    Email: {
        type: String,
        unique: true
    },
    Password: String,
})

const MyModel = mongoose.model('Users', UsuariosSchema)


/*Guardar Usuarios*/
ModelUsuarios.Register = function (post, callback) {
    let minusculas = post.Email.toLowerCase();
    MyModel.find({ Email: post.Email }, {}, (error, documentos) => {
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
                instancia.Name = post.Name
                instancia.Email = minusculas
                instancia.Password = post.Password
                instancia.save((error, creado) => {
                    console.log(minusculas)
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
        if (error) {
            return callback({ state: false, data: error })
        }
        else {
            return callback({ state: true, data: documentos })
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
                MyModel.findOneAndUpdate(documentos[0].Cedula, {
                    Name: post.Name,
                    Email: post.Email,
                    password: post.password,

                }, (error, usuariomodificado) => {
                    if (error) {
                        return callback({ state: false, data: error })
                    }
                    else {
                        return callback({ state: true })
                    }
                })
            }
            else {
                return callback({ state: false, mensaje: 'La Cedula no existe' })
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
    MyModel.find({ Email: post.Email }, {}, (error, documentos) => {

        if (documentos.length < 1)
        return callback({ state: true, mensaje:'El email no exixte' })
        else {
            if (documentos.length > 0) {
            MyModel.find({ Email: post.Email, Password: post.Password }, {}, (error, documentos) => {
                if (error) {
                    return callback({ state: false, mensaje: error })
                }
                else {
                    if (documentos.length == 1) {
                        return callback({ state: true, mensaje: 'Bienvenido: ' + documentos[0].Name })
                    }
                    else {
                        return callback({ state: false, mensaje: 'El usuario o el password son incorrectos' })
                    }
                }
            
            })
        }}
    })
}
module.exports.usuarios = ModelUsuarios