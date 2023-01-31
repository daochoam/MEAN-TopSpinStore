var UsersModels={}

/*=============     MONGO DB     ===============*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UsersSchema = new Schema({
    Code:String,
    Name:String,
    Email:String,
})

const UsersDB = mongoose.model('Users',UsersSchema)

/*======================================================*/
/*=================    CREATE       ====================*/
UsersModels.CreateUser = function(post,callback) {
    const instance = new UsersDB
    instance.Code = post.Code
    instance.Name = post.Name
    instance.Email = post.Email
    
    instance.save((err,created) =>{
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
/*=================    READ ALL     ====================*/
UsersModels.LoadAll = function(post,callback) {
    UsersDB.find({},{},(err,doc)=>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true,data:doc})
        }
    })
}
/*=================   READ BY ID    ====================*/
UsersModels.LoadById = function(post,callback) {
    UsersDB.findById(post.Id,{},(err,doc) =>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true,data:doc})
        }
    })
}

/*======================================================*/
/*=================     UPDATE      ====================*/
/*=================  UPDATE BY ID   ====================*/
UsersModels.UpdateById = function(post,callback) {
    UsersDB.findByIdAndUpdate(post.Id,{
        Code: post.Code,
        Name: post.Name,
    },(err,doc)=>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true})
        }
    })
}

/*======================================================*/
/*=================     DELETE      ====================*/
/*=================  DELETE BY ID   ====================*/
UsersModels.DeleteById = function(post,callback) {
    UsersDB.findByIdAndDelete(post.Id,(err,doc)=>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true})
        }
    })
}

module.exports.users = UsersModels