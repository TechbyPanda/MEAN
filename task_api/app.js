const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://palash:McggSmB1Cfy5fTwI@cluster0.2xhyr.mongodb.net/amazon?retryWrites=true&w=majority")
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

const productRoute = require('./route/product.route');
const userRoute = require('./route/user.route');
const cartRoute = require('./route/cart.route');

app.use('/api/products',productRoute);
app.use('/api/users',userRoute);
app.use('/api/cart',cartRoute);

app.listen(port,()=>{
    console.log('listening on port 3000');
});