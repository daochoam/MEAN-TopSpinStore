var express     = require('express')
var bodyParser  = require('body-parser')
var cors        = require('cors')
var mongoose    = require('mongoose')
global.config   = require(__dirname + '/config.js').config

global.app      = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/*================== Enable headers and addresses =======================*/
app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;

    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
})

/*================== CORS configuration =======================*/
app.use(cors({
    origin:function(origin,callback) {
        console.log(origin)
        if(!origin) return callback(null,true)
        
        if(config.whitelist.indexOf(origin) === -1) {
            return callback('error cors',false)
        }
        return callback(null,true)
    }
}))

/*================== MONGO DB configuration =======================*/
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/' + config.bd, {useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
    console.log('conexion a mongo correcta')
    }
})

require(__dirname + '/routes.js')

app.listen(config.puerto, function(){
    console.log('Servidor conectado por el puerto '+ config.puerto)
})