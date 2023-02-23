var ProductosController = require(__dirname + '/../api/controladores/productoscontroller.js').productos


app.post("/Products/Save", function(request, response){
    ProductosController.Save(request, response)
})

app.post("/Products/LoadAllProducts", function(request, response){
    ProductosController.LoadAllProducts(request, response)
})

app.post("/Products/LoadByCode", function(request, response){
    ProductosController.LoadByCode(request, response)
})

app.post("/Products/UpdateByCode", function(request, response){
    ProductosController.UpdateByCode(request, response)
})

app.post("/Products/DeleteByCode", function(request, response){
    ProductosController.DeleteByCode(request, response)
})