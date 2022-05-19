const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:'hello'
    },
    content:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('posts',postSchema);