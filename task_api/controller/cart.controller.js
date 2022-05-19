const model = require('../model/cart.model');

exports.add = async(req,res) => {
    let uId = req.body.userId;
    let pId = req.body.productId;

    let cart = await model.findOne({userId:uId});

    if(!cart){
        cart = new model();
        cart.userId = uId;
    }
    cart.productId.push(pId);
    cart.save()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    })
}

exports.view = (req,res) => {
    model.findOne({userId:req.body.userId}).populate('productId')
    .then(result => {
        return res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'})
    })
}

exports.delete = (req,res) => {
    console.log(req.body.userId);
    console.log(req.body.productId);
    model.updateOne({userId:req.body.userId},{$pullAll:
        {productId:[{_id:req.body.productId}]}
    })
    .then(result => {
        return res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    })
}