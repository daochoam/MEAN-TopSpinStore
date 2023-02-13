var ModelProductos = {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ProductosSchema = new Schema({
    codigo:String,
    nombre:String,
    fechav:String,
    })

const MyModel = mongoose.model('Products', ProductosSchema)


ModelProductos.Guardarp = function(post, callback){
    const instancia = new MyModel
    instancia.codigo = post.codigo
    instancia.nombre = post.nombre
    instancia.fechav = post.fechav
    instancia.save((error,creado) => {
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true})
        }
    })
}

ModelProductos.CargarTodas = function(post, callback){
    MyModel.find({},{},(error, documentos)=> {
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true,data:documentos})
        }
    })
}

ModelProductos.CargarId = function(post, callback){
    MyModel.findById(post.id,{},(error,documentos)=>{
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true,data:documentos})
        }    
    })
}

ModelProductos.ActualizarId = function(post, callback){
    MyModel.findByIdAndUpdate(post.id,{
        codigo:post.codigo,
        nombre:post.nombre,
        fechav:post.fechav,
    },(error, modificado)=>{
        if (error){

            return callback({state:false,data:error})
          
        }
        else{
            return callback({state:true})
        }  

    })
}

ModelProductos.Eliminar = function(post, callback){
    MyModel.findByIdAndDelete(post.id,(error, eliminado)=>{
        if (error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true})
        }      
    })
}

module.exports.productos = ModelProductos