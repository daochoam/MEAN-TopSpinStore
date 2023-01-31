var UsersControllers = require(__dirname+'/api/Controller/UsersControllers.js').users

app.post("/Usuarios/Guardar", function(req, res){
    UsersControllers.CreateUser(req, res)
})

app.post("/Usuarios/CargarTodas", function(req, res){
    UsersControllers.LoadAll(req, res)
})

app.post("/Usuarios/CargarId", function(req, res){
    UsersControllers.LoadById(req, res)
})

app.post("/Usuarios/ActualizarId", function(req, res){
    UsersControllers.UpdateById(req, res)
})

app.post("/Usuarios/Eliminar", function(req, res){
    UsersControllers.DeleteById(req, res)
})