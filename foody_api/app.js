const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://palash:McggSmB1Cfy5fTwI@cluster0.2xhyr.mongodb.net/foody?retryWrites=true&w=majority")
.then(result=>{
    console.log('database connected')
})
.catch(err => {
    console.log('error connecting to cluster')
    console.log(err);
})

const userRouter = require('./route/user.route');
const adminRouter = require('./route/admin.route');
const productRouter = require('./route/product.router');

const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);
app.use('/api/product',productRouter);

app.listen(port, ()=>{
    console.log('server running');
})

