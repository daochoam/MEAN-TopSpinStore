var ModelProductos = {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ProductosSchema = new Schema({
    SKU: {
        type: String,
        unique: true,
        require: true
    },
    Nombre: {
        type: String,
        require: true
    },
    Cantidad: {
        type: Number,
        require: true
    },
    Precio: {
        type: Number,
        require: true
    },
    Categoria: String,
    Color: String,
    Descripcion: String,
    created_at: {
        type: Date,
        default: Date()
    }
})


const MyModel = mongoose.model('Products', ProductosSchema)

/**************************************************************/
/******************           CREATE         ******************/

ModelProductos.Save = function (post, callback) {
    console.log(post.SKU)
    MyModel.find({ SKU: post.SKU }, {}, (error, document) => {
        console.log(document)
        if (document.length > 0) {
            return callback({ state: false, message: `The Code ${post.Codigo} is already registered` })
        }
        else {
            const instancia = new MyModel
                instancia.SKU = post.SKU,
                instancia.Nombre = post.Nombre,
                instancia.Cantidad = parseInt(post.Cantidad),
                instancia.Precio = parseFloat(post.Precio),
                instancia.Poster = post.Poster,
                instancia.Categoria = post.Categoria,
                instancia.Color = post.Color,
                instancia.Descripcion = post.Descripcion,
                instancia.save((error, creado) => {
                    return callback({ state: true, creado, message: `Product created successfully` })
                })
        }
    })
}


/**************************************************************/
/******************           READ           ******************/
ModelProductos.LoadAllProducts = function (post, callback) {
    MyModel.find({}, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, data: error })
        }
        else {
            return callback({ state: true, data: documentos })
        }
    })
}

ModelProductos.LoadById = function (post, callback) {
    MyModel.findById(post.Id, {}, (error, documentos) => {
        if (error) {
            return callback({ state: false, data: error })
        } else {
            return callback({ state: true, data: documentos })
        }
    })
}

ModelProductos.LoadByCode = function (post, callback) {
    MyModel.find({ Codigo: post.Codigo }, {}, (error, documentos) => {
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

/**************************************************************/
/******************        UPDATE            ******************/
ModelProductos.UpdateById = function (post, callback) {
    MyModel.findByIdAndUpdate(post._id, {
        Nombre: post.Nombre.trimStart().trimEnd(),
        Cantidad: parseInt(post.Cantidad),
        Precio: parseFloat(post.Precio),
        Poster: post.Poster,
        Categoria: post.Categoria,
        Color: post.Color,
        Descripcion: post.Descripcion
    }, (err, doc) => {
        if (err) {
            console.log(err)
            return callback({ state: false, mensaje: err })
        }
        else {
            return callback({ state: true })
        }
    })
}

ModelProductos.UpdateByCode = function (post, callback) {
    MyModel.find({ SKU: post.SKU }, {}, (error, documentos) => {
        if (documentos.length > 0) {
            MyModel.findByIdAndUpdate(documentos[0]._id, {
                Nombre: post.Nombre.trimStart().trimEnd(),
                Cantidad: post.Cantidad.trimStart().trimEnd(),
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

/***************************************************************/
/******************         DELETE            ******************/
ModelProductos.DeleteById = function (post, callback) {
    MyModel.findByIdAndDelete(post._id, (error, eliminado) => {
        if (error) {
            return callback({ state: false, data: error })
        }
        else {
            return callback({ state: true })
        }
    })
}

ModelProductos.DeleteByCode = function (post, callback) {
    MyModel.find({ SKU: post.SKU }, {}, (error, documentos) => {
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