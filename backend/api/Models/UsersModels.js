var UsersModels={}

/*=============     MONGO DB     ===============*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UsersSchema = new Schema({
    Cc:{
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    Name:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    Password:{
        type: String,
        required: true,
        trim: true
    },
    Phone:{
        type: Number,
        required: true,
        trim: true
    },
    Address:{
        type: String,
        required: true,
        trim: true
    },
    Buy:{
        SKU: [codigoQuality],
    },
    created_at:{
        type: Date,
        default: Date()
    }
})
//coleccion carrito de compra para cada user. Agregado db
//https://www.youtube.com/watch?v=rg3RRDSzgcI&t=4s&ab_channel=Picandocodigo

const UsersDB = mongoose.model('Users',UsersSchema)

/*======================================================*/
/*=================    CREATE       ====================*/
/*=================   REGISTER      ====================*/
UsersModels.RegisterUsers = function (post, callback) {
    const instance = new UsersDB
    instance.Name = post.Name
    instance.Email = post.Email
    instance.Password = post.Password
    instance.Phone = post.Phone
    instance.save((err,__) =>{
        if(err){
            return callback({state:false,data:err})
        }
        else{
            return callback({state:true})
        }
    })
}

/*======================================================*/
/*=================      READ       ====================*/
/*=================     LOGIN       ====================*/


module.exports.users = UsersModels