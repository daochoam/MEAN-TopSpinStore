var ModelProductos = require(__dirname + '/../modelos/modelproductos.js').productos
var ProductosController = {}
//var trimStart = require('string.prototype.trimstart')
//var trimEnd = require('string.prototype.trimend')

ProductosController.Save = function(request, response){
    var post = {
        Codigo:request.body.Codigo.trimStart().trimEnd(),
        Nombre:request.body.Nombre.trimStart().trimEnd(),
        Cantidad:request.body.Cantidad.trimStart().trimEnd(),
        Precio:request.body.Precio.trimStart().trimEnd()
    }

    if (post.Codigo ==  "" || post.Codigo == undefined || post.Codigo == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }
    
    if (post.Nombre ==  "" || post.Nombre == undefined || post.Nombre == null){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.Cantidad ==  "" || post.Cantidad == undefined || post.Cantidad == null){
        response.json({state:false,mensaje:"El campo cantidad es obligatorio"})
        return false
    }

    if( isNaN(post.Cantidad) ) {
        response.json({state:false,mensaje:"El cantidad solo acepta valores numericos"})
        return false;
    }
    if (post.Cantidad < 1){
        response.json({state:false,mensaje:"El campo cantidad debe ser mayor a 0"})
        return false
    }

    if (post.Precio ==  "" || post.Precio == undefined || post.Precio == null){
        response.json({state:false,mensaje:"El campo precio es obligatorio"})
        return false
    }

    if( isNaN(post.Precio) ) {
        response.json({state:false,mensaje:"El campo Precio solo acepta valores numericos"})
        return false;
    }
    if (post.Precio < 1){
        response.json({state:false,mensaje:"El campo Precio debe ser mayor a 0 "})
        return false
    }

    ModelProductos.Save(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se guardo correctamente"})
        }
        else{
            response.json({state:false,mensaje:"El codigo ya existe"})
        }
    })

}

ProductosController.LoadAllProducts = function(request, response){
    ModelProductos.LoadAllProducts(null, function(respuesta){
        response.json(respuesta)
    })  
}

ProductosController.LoadById = function(request, response){
    var post = {
        Id:request.body.Id.trimStart().trimEnd(),
    }

    if (post.Id ==  "" || post.Id == undefined || post.Id == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }
    
    ModelProductos.LoadById(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:respuesta.state ,data:respuesta.data})
        }
        else{
            response.json({state:false,mensaje:"El codigo no existe"})
        }
    })
}

ProductosController.LoadByCode = function(request, response){
    var post = {
        Codigo:request.body.Codigo.trimStart().trimEnd(),
    }

    if (post.Codigo ==  "" || post.Codigo == undefined || post.Codigo == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }

    
    ModelProductos.LoadByCode(post,function(respuesta){
        if(respuesta.state == true){
            response.json({respuesta,mensaje:"Se cargo correctamente"})
        }
        else{
            response.json({state:false,mensaje:"El codigo no existe"})
        }
    })
}

ProductosController.LoadByCategory = function(request, response){
    var post = {
        Categoria:request.body.Categoria.trimStart().trimEnd(),
    }

    if (post.Categoria ==  "" || post.Categoria == undefined || post.Categoria == null){
        response.json({state:false,mensaje:"El campo Categoria es obligatorio"})
        return false
    }

    
    ModelProductos.LoadByCategory(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:respuesta.state ,data:respuesta.data})
        }
        else{
            response.json({state:false,mensaje:"La categoria no existe"})
        }
    })
}

ProductosController.UpdateById = function(request, response){
    var post = {
        Id:request.body.Id.trimStart().trimEnd(),
        Codigo:request.body.Codigo.trimStart().trimEnd(),
        Nombre:request.body.Nombre.trimStart().trimEnd(),
        Cantidad:request.body.Cantidad.trimStart().trimEnd(),
        Precio:request.body.Precio.trimStart().trimEnd()
    }

    if (post.Id ==  "" || post.Id == undefined || post.Id == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }

    if (post.Codigo ==  "" || post.Codigo == undefined || post.Codigo == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }
    
    if (post.Nombre ==  "" || post.Nombre == undefined || post.Nombre == null){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.Cantidad ==  "" || post.Cantidad == undefined || post.Cantidad == null){
        response.json({state:false,mensaje:"El campo cantidad es obligatorio"})
        return false
    }

    if( isNaN(post.Cantidad) ) {
        response.json({state:false,mensaje:"El cantidad solo acepta valores numericos"})
        return false;
    }
    if (post.Cantidad < 1){
        response.json({state:false,mensaje:"El campo cantidad debe ser mayor a 0"})
        return false
    }

    if (post.Precio ==  "" || post.Precio == undefined || post.Precio == null){
        response.json({state:false,mensaje:"El campo precio es obligatorio"})
        return false
    }

    if( isNaN(post.Precio) ) {
        response.json({state:false,mensaje:"El campo Precio solo acepta valores numericos"})
        return false;
    }
    if (post.Precio < 1){
        response.json({state:false,mensaje:"El campo Precio debe ser mayor a 0 "})
        return false
    }

    ModelProductos.UpdateById(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se actualizó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"El codigo no exixte"})
        }
    })

}

ProductosController.UpdateByCode = function(request, response){
    var post = {
        Codigo:request.body.Codigo.trimStart().trimEnd(),
        Nombre:request.body.Nombre.trimStart().trimEnd(),
        Cantidad:request.body.Cantidad.trimStart().trimEnd(),
        Precio:request.body.Precio.trimStart().trimEnd()
    }

    if (post.Codigo ==  "" || post.Codigo == undefined || post.Codigo == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }
    
    if (post.Nombre ==  "" || post.Nombre == undefined || post.Nombre == null){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.Cantidad ==  "" || post.Cantidad == undefined || post.Cantidad == null){
        response.json({state:false,mensaje:"El campo cantidad es obligatorio"})
        return false
    }

    if( isNaN(post.Cantidad) ) {
        response.json({state:false,mensaje:"El cantidad solo acepta valores numericos"})
        return false;
    }
    if (post.Cantidad < 1){
        response.json({state:false,mensaje:"El campo cantidad debe ser mayor a 0"})
        return false
    }

    if (post.Precio ==  "" || post.Precio == undefined || post.Precio == null){
        response.json({state:false,mensaje:"El campo precio es obligatorio"})
        return false
    }

    if( isNaN(post.Precio) ) {
        response.json({state:false,mensaje:"El campo Precio solo acepta valores numericos"})
        return false;
    }
    if (post.Precio < 1){
        response.json({state:false,mensaje:"El campo Precio debe ser mayor a 0 "})
        return false
    }

    ModelProductos.UpdateByCode(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se actualizó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"El codigo no exixte"})
        }
    })

}

ProductosController.DeleteById = function(request, response){
    var post = {
        Id:request.body.Id.trimStart().trimEnd(),
    }
    if (post.Id ==  "" || post.Id == undefined || post.Id == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }

    ModelProductos.DeleteById(post, function(respuesta){

        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:`The product has been successfully deleted`})
        }
        else{
            response.json({state:false,mensaje:"El codigo no existe"})
        }
    })

}

ProductosController.DeleteByCode = function(request, response){
    var post = {
        Codigo:request.body.Codigo.trimStart().trimEnd(),
    }
    if (post.Codigo ==  "" || post.Codigo == undefined || post.Codigo == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }
    ModelProductos.DeleteByCode(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se eliminó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"El codigo no existe"})
        }
    })
}


module.exports.productos = ProductosController