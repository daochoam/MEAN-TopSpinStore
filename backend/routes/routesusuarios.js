var UsuariosController = require(__dirname + '/../api/controladores/usuarioscontroller.js').usuarios


app.post("/Users/Register",function(request, response){
    UsuariosController.Register(request, response)
})

app.post("/Users/LoadAllUsers", function(request, response){
    UsuariosController.LoadAllUsers(request, response)
})

app.post("/Users/LoadByDocument", function(request, response){
    UsuariosController.LoadByDocument (request, response)
})

app.post("/Users/UpdateByDocument", function(request, response){
    UsuariosController.UpdateByDocument(request, response)
})

app.post("/Users/DeleteByDocument", function(request, response){
    UsuariosController.DeleteByDocument(request, response)
})

app.post("/Users/Login", function(request,response){
    UsuariosController.Login(request,response)
})