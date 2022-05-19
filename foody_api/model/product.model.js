const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        
    },
    gender:{
        type:String,
        
    },
    color:[{
        name:{
            type:String,
            
        },
        image1:{
            type:String,
            
        },
        image2:{
            type:String,
            
        },
        image3:{
            type:String,
            
        },
        image4:{
            type:String,
            
        },
    }],
    size:[{
        name:{
            type:String,
            
        }
    }],
    brand:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        
    },
    quantity:{
        type:Number,
        
    },
    description:{
        type:String,
        
    }
});

module.exports = mongoose.model('products',productSchema)