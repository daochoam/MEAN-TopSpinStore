const { request, response } = require("express")

var UsuariosController = require(__dirname + '/../api/controladores/usuarioscontroller.js').usuarios

var validarSesion = function(request, response, next){
    if(request.session.Rol == undefined || request.session.Rol == null || request.session.User == ""){
        response.json({state:false, mensaje:'Su sesion a expirado, inicie nuevamente'})
        return false
    }else{
        next()
    }
}

app.post("/Users/Register",function(request, response){
    UsuariosController.Register(request, response)
})

app.post("/Users/Save",function(request, response){
    UsuariosController.Save(request, response)
})

app.post("/Users/LoadAllUsers" , function(request, response){
    UsuariosController.LoadAllUsers(request, response)
})

app.post("/Users/LoadByDocument", function(request, response){
    UsuariosController.LoadByDocument (request, response)
})

app.post("/Users/LoadById", function(request, response){
    UsuariosController.LoadById (request, response)
})

app.post("/Users/UpdateByDocument", function(request, response){
    UsuariosController.UpdateByDocument(request, response)
})

app.post("/Users/UpdateById", function(request, response){
    UsuariosController.UpdateById(request, response)
})

app.post("/Users/DeleteByDocument", function(request, response){
    UsuariosController.DeleteByDocument(request, response)
})
app.post("/Users/DeleteById", function(request, response){
    UsuariosController.DeleteById(request, response)
})

app.post("/Users/Login", function(request,response){
    UsuariosController.Login(request, response)
    })

app.post("/Users/ViewCookie", function(request, response){
    response.json({clave:request.session})
})

app.post("/Users/MenuRol", validarSesion, function(request, response){
    if(request.session.Rol == 1){
        response.json({state:true,datos:[
        {nombre:'Usuarios', destino:'/usuarios'},
        {nombre:'productos', destino:'/productos'},
        {nombre:'servicios', destino:'/servicios'}
    ]})
    }
    else{
        response.json({state:true,datos:[
            {nombre:'Usuarios', destino:'/usuarios'},
        ]})
    }
})