const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://palash:McggSmB1Cfy5fTwI@cluster0.2xhyr.mongodb.net/E_shoes?retryWrites=true&w=majority")
.then(result=>{
    console.log("database connection established");
})
.catch(err=>{
    console.log("database connection error: " + err);
});

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const productRouter = require("./route/product.router")

app.use('/api/product',productRouter);


app.listen(port, ()=>{
    console.log('server running')
})