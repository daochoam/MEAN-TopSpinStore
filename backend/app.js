var express = require ('express')
var cors = require('cors')
var bodyparser = require('body-parser')
const { config } = require('./config')
const mongoose = require('mongoose')
const { name } = require('ejs')
const MongoStore = require('connect-mongo')

global.sha256 = require('sha256')
global.app = express()
global.config = require (__dirname + '/config.js').config

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/' + config.db, {useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
    console.log('conexion a mongo correcta')
    }
})

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:true}))


app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;

    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
})

var session = require('express-session')({
    secret:config.claveoculta,
    resave:true,
    saveUninitialized:true,
    cookie:{path:'/',httpOnly:true,maxAge:config.tiemposession},
    name:config.cookiename,
    rolling:true,
    store: MongoStore.create({mongoUrl:'mongodb://127.0.0.1:27017/' + config.db +'cookie'})
})

app.use(session);

app.use(cors({
    origin:function(origin,callback){
        console.log(origin)
        if(!origin) return callback(null,true)

        if(config.listablanca.indexOf(origin) === -1){
            return callback('error de cors', false)
        }
        return callback(null,true)
    }
}))

app.listen(config.puerto, function(){
    console.log('Servidor funcionando por el puerto ' + config.puerto)
})

require(__dirname + '/routes/routesusuarios.js')
require(__dirname + '/routes/routesproductos.js')
require(__dirname + '/routes/routescategory.js')