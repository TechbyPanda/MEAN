const model = require('../model/product.model');

exports.add = (req,res)=> {
    console.log(req.body);
    model.create(req.body)
    .then(result=>{
        console.log(result);
        return res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    })
}

exports.fetch = (req,res) => {
    model.find()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    })
}