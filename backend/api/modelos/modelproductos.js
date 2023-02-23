var ModelProductos = {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ProductosSchema = new Schema({
    Codigo:{
        type:String,
        unique:true
    },
    Nombre: String,
    Cantidad:Number,
    Precio:Number,
    })

const MyModel = mongoose.model('Products', ProductosSchema)


ModelProductos.Save = function (post, callback) {
    MyModel.find({ Codigo: post.Codigo }, {}, (error, documentos) => {
        if (documentos.length > 0) {
            return callback({ state: false, data: error })
        } else {

            const instancia = new MyModel
            instancia.Codigo = post.Codigo
            instancia.Nombre = post.Nombre
            instancia.Cantidad = parseInt(post.Cantidad)
            instancia.Precio = parseInt(post.Precio)
            instancia.save((error, creado) => {
                return callback({ state: true, creado })
            })
        }
    })
}



ModelProductos.LoadAllProducts = function(post, callback){
    MyModel.find({},{},(error, documentos)=> {
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true,data:documentos})
        }
    })
}

ModelProductos.LoadByCode = function(post, callback){
    MyModel.find({Codigo:post.Codigo }, {}, (error, documentos) => {
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

ModelProductos.UpdateByCode = function(post, callback){
    MyModel.find({ Codigo: post.Codigo }, {}, (error, documentos) => {
            if (documentos.length > 0) {
                MyModel.findByIdAndUpdate(documentos[0]._id, {
                    Nombre: post.Nombre.trimStart().trimEnd(),
                    Cantidad:post.Cantidad.trimStart().trimEnd(),
                    Precio: post.Precio.trimStart().trimEnd()    
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
          // return callback({cantidad:documentos.length})
    })
}

ModelProductos.DeleteByCode = function(post, callback){
    MyModel.find({ Codigo: post.Codigo }, {}, (error, documentos) => {
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

module.exports.productos = ModelProductos