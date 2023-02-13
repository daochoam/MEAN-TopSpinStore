var UsuariosController = require(__dirname + '/../api/controladores/usuarioscontroller.js').usuarios


app.post("/Users/Register", function(request, response){
    UsuariosController.Register(request, response)
})

app.post("/Users/LoadAllUsers", function(request, response){
    UsuariosController.LoadAllUsers(request, response)
})

app.post("/Users/LoadEmail", function(request, response){
    UsuariosController.LoadEmail(request, response)
})

app.post("/Users/UpdateByEmail", function(request, response){
    UsuariosController.UpdateByEmail(request, response)
})

app.post("/Users/DeleteByEmail", function(request, response){
    UsuariosController.DeleteByEmail(request, response)
})
