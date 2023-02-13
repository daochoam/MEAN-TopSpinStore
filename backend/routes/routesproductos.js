var ProductosController = require(__dirname + '/../api/controladores/productoscontroller.js').productos


app.post("/Productos/Guardar", function(request, response){
    ProductosController.Guardarp(request, response)
})

app.post("/Productos/CargarTodas", function(request, response){
    ProductosController.CargarTodas(request, response)
})

app.post("/Productos/CargarId", function(request, response){
    ProductosController.CargarId(request, response)
})

app.post("/Productos/ActualizarId", function(request, response){
    ProductosController.ActualizarId(request, response)
})

app.post("/Productos/Eliminar", function(request, response){
    ProductosController.Eliminar(request, response)
})