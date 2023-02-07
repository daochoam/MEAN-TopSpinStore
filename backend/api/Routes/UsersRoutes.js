var UsersControllers = require(__dirname+'/../Controller/UsersControllers.js').users
var express = require('express')
const routes = express.Router()

routes.post("/register", function(req, res){
    UsersControllers.RegisterUsers(req, res)
})

module.exports = routes