var ItemsModels = require(__dirname + '/../Models/ItemsModels.js').items
var ItemsControllers = {}


/******************* REGISTER USER  ******************/
ItemsControllers.AddItem = function(req,res){
    var post = {
        SKU: req.body.SKU,
        Name: req.body.Name,
    }
}

ItemsControllers.AddDiscount = function(req,res){
    var post = {
        Name: req.body.Name,
        Discount: req.body.Discount,
    }
}

ItemsControllers.ReadItemsList = function(req,res){

}

ItemsControllers.ReadItem = function(req,res){
    var post = {
        Name: req.body.Name,
    }
}

ItemsControllers.UpdateItem = function(req,res){
    var post = {
        SKU: req.body.SKU,
        Name: req.body.Name,
        Price: req.body.Price,
        Stock: req.body.Stock,
        Description: req.body.Description,
    }
}

ItemsControllers.UpdateDiscount = function(req,res){

}

ItemsControllers.UpdateDescription = function(req,res){
    var post = {
        Name: req.body.Name,
        Description: req.body.Description,
    }

}

ItemsControllers.UpdatePrice = function(req,res){
    var post = {
        Name: req.body.Name,
        Price: req.body.Price,
    }
}

ItemsControllers.UpdateStock = function(req,res){
    var post = {
        Name: req.body.Name,
        Stock: req.body.Stock,
    }
}

ItemsControllers.DeleteItem = function(req,res){

}

ItemsControllers.DeleteDiscount = function(req,res){
    var post = {
        Name: req.body.Name,
        Discount: req.body.Discount,
    }
}
module.exports.items = ItemsControllers