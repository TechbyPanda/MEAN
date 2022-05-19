const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    productId:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'products'
    }]
});

module.exports = mongoose.model('carts',cartSchema);