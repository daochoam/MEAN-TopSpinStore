var ModelProductos = require(__dirname + '/../modelos/modelproductos.js').productos
var ProductosController = {}


ProductosController.Guardarp = function(request, response){
    var post = {
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        fechav:request.body.fechav,
    }
 
    if (post.codigo ==  "" || post.codigo == undefined || post.codigo == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }
    
    if (post.nombre ==  "" || post.nombre == undefined || post.nombre == null){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.fechav ==  "" || post.fechav == undefined || post.fechav == null){
        response.json({state:false,mensaje:"El campo fecha de vencimiento es obligatorio"})
        return false
    }

    ModelProductos.Guardarp(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se guardo correctamente"})
        }
        else{
            response.json({state:false,mensaje:"error al guardar"})
        }
    })

}

ProductosController.CargarTodas = function(request, response){
    ModelProductos.CargarTodas(null, function(respuesta){
        response.json(respuesta)
    })  
}

ProductosController.CargarId = function(request, response){
    var post = {
        id:request.body.id,
        
    }

    if (post.id ==  "" || post.id == undefined || post.id == null){
        response.json({state:false,mensaje:"El campo id es obligatorio"})
        return false
    }
    ModelProductos.CargarId(post,function(respuesta){
        console.log(respuesta)
        console.log(respuesta)
        response.json(respuesta)
    })
}

ProductosController.ActualizarId = function(request, response){
    var post = {
        id:request.body.id,
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        fechav:request.body.fechav,
    }

    if (post.id ==  "" || post.id == undefined || post.id == null){
        response.json({state:false,mensaje:"El campo id es obligatorio"})
        return false
    }

    if (post.codigo ==  "" || post.codigo == undefined || post.codigo == null){
        response.json({state:false,mensaje:"El campo codigo es obligatorio"})
        return false
    }
    
    if (post.nombre ==  "" || post.nombre == undefined || post.nombre == null){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.fechav ==  "" || post.fechav == undefined || post.fechav == null){
        response.json({state:false,mensaje:"El campo fecha de vencimiento es obligatorio"})
        return false
    }

    ModelProductos.ActualizarId(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se actualizó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"error al actualizar"})
        }
    })

}

ProductosController.Eliminar = function(request, response){
    var post = {
        id:request.body.id,
        
    }

    if (post.id ==  "" || post.id == undefined || post.id == null){
        response.json({state:false,mensaje:"El campo id es obligatorio"})
        return false
    }
    ModelProductos.Eliminar(post, function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"se eliminó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"error al eliminar"})
        }
    })
}

module.exports.productos = ProductosController