const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    brand:{
        type:String,
        required:true,
        trim:true
    },
    size:[{
        type:String,
        // required:true,
        trim:true
    }],
    price:{
        type:Number,
        required:true,
        trim:true
    },
    color:[{
        colorName:{
            type:String,
            // required:true,
            trim:true
        },
        image1:{
            type:String,
            // required:true,
            trim:true
        },
        image2:{
            type:String,
            // required:true,
            trim:true
        },
        image3:{
            type:String,
            // required:true,
            trim:true
        },
        image4:{
            type:String,
            // required:true,
            trim:true
        }
    }],
    quantity:{
        type:String,
        required:true,
        trim:true
    },
    discount:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('products',productSchema)