const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://palash:McggSmB1Cfy5fTwI@cluster0.2xhyr.mongodb.net/node-angular-database?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to the database");
})
.catch(err=>{
    console.log("Connection Failed");
    console.log(err);
})


const app = express();
const postmodel = require('./model/post.model');

app.use(cors());
//npm run start:server 

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader(  
        "Access-Control-Allow-Headers",  
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",  
        "GET, POST,PUT, PATCH, DELETE, OPTIONS");
    next();
});

app.put('/api/posts/:id',(req,res,next)=>{
    console.log(req.body.title);
    const post={
        title: req.body.title,
        content: req.body.content
    };
    postmodel.updateOne({_id:req.params.id},post)
    .then(result=>{
        console.log(result);
        res.status(200).json({message:'post updated successfully'});
    })
    .catch(err=>{
        console.log(err)
    });
})

app.get('/api/posts/:id',(req,res,next)=>{
    postmodel.findById(req.params.id)
    .then(result=>{
        if(result){
            return res.status(200).json(result);
        }else{
            return res.status(400).json({message:'Post not found'});
        }
    })
})

app.post('/api/posts',(req,res,next) => {
    const post = new postmodel({
        title: req.body.title,
        content: req.body.content
    });
    post.save()
    .then(result=> {
        console.log(result)
        res.status(201).json({
            message: 'post added successfully',
            postId:result._id
        });
    })
    console.log(post);
});

app.get('/api/posts',(req, res, next)=>{
    postmodel.find()
    .then((result)=>{
        console.log(result);
        res.status(200).json({
            message: "Posts Fetched Successfully",
            posts: result
        });
    })
    
});

app.delete('/api/posts/:id',(req,res,next)=>{
    postmodel.deleteOne({_id:req.params.id})
    .then(result=>{
        console.log(result);
        return res.status(200).json({message: "Posts deleted Successfully"});
    })
});

module.exports = app;