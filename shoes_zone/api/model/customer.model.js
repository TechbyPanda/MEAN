const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        trim:true
    }
});

module.exports = mongoose.model('customers',customerSchema);