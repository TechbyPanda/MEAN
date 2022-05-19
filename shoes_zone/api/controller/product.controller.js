const model = require('../model/product.model');

exports.add = (request, response)=>{
    console.log(request.files)
    const color = {
        colorName: request.body.colorName,
        image1: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[0].filename+"?alt=media&token=abcdefg",
        image2: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[1].filename+"?alt=media&token=abcdefg",
        image3: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[2].filename+"?alt=media&token=abcdefg",
        image4: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[3].filename+"?alt=media&token=abcdefg",
    }

    model.create({
        name: request.body.name,
        price: request.body.price,
        quantity: request.body.quantity,
        brand: request.body.brand,
        discount: request.body.discount,
        size: request.body.size,
        color: color
    })
    .then(result =>{
        console.log(result);
        return response.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        return response.status(500).json({message:'Oops ! Something went wrong'});
    })
}

exports.fetch = (req, res) => {
    model.find()
    .then(result=>{
        return res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        return res.status(500).json({message:'Oops ! Something went wrong'})
    })
}