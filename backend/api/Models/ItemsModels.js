var ItemsModels={}

/*=============     MONGO DB     ===============*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ItemsSchema = new Schema({
    SKU:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    Name:{
        type: String,
        require: true,
        trim: true
    },
    Category:{
        type: String,
        require: true
    },
    Picture:{
        type: String,
        require: true,
    },
    Stock:{
        type: Number,
        require: true,
        default: 0
    },
    Price:{
        type: Number,
        require: true,
        default: 0,
    },
    Discount:{
        type: Number,
        require: false,
        default: 0,
    },
    Description:{
        type: String,
        require: true
    },
    created_at:{
        type: Date,
        default: Date()
    }
})

module.exports.items = ItemsModels