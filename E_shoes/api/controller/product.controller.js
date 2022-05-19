const Product = require("../model/product.model");

exports.create = (req,res,next) => {
    // const color = {
    //     name:req.body.color,
    //     image1:req.body.image1,
    //     image2:req.body.image2,
    //     image3:req.body.image3,
    //     image4:req.body.image4
    // }

    Product.create({
        name:req.body.name,
        gender:req.body.gender,
        size:{$push:req.body.size},
        
        brand:req.body.brand,
        price:req.body.price*1,
        quantity:req.body.quantity*1,
        description:req.body.description
    })
    .then(result => {
        return res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    })
}