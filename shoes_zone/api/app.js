const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://palash:McggSmB1Cfy5fTwI@cluster0.2xhyr.mongodb.net/shoes_zone?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to the database");
})
.catch(err=>{
    console.log("Connection Failed");
    console.log(err);
})

const port=process.env.PORT || 3000 ;
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const customer = require('./route/customer.route')
const product = require('./route/product.route')

app.use('/api/customer',customer);
app.use('/api/product',product);

app.listen(port,()=>{
    console.log('listening on port 3000');
});