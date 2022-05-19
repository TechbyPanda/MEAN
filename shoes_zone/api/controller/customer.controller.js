const customerModel = require('../model/customer.model')

exports.signup=(request, response)=>{
    console.log(request.file)
    customerModel.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        image: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.file.filename+"?alt=media&token=abcdefg"
    })
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json(err);
    })
}

exports.signin=(req,res) => {
    console.log(req.body);
    customerModel.findOne(req.body)
    .then(result=>{
        if(result){
            return res.status(200).json({
                status:'login success',
                current_user: result
            });
        }else{
            return res.status(500).json({message:'login failed'});
        }
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({ message: 'Oops ! Something went wrong'})
    })
}