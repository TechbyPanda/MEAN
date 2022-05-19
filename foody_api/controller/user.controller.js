const User = require('../model/user.model')
const jwt = require('jsonwebtoken');
const token = require('../middleware2/token');

exports.signup = (req,res) => {
    User.create(req.body)
    .then(result=>{
        console.log(result);
        return res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    });
}

exports.signin = (req,res)=>{
    User.findOne(req.body)
    .then(result=>{
        if(result){
            let payload = { subject: req._id};
            let token = jwt.sign(payload,'attack on titan');
            return res.status(200).json({
                status:'login', 
                current_user: result,
                token: token
            });
        }else{
            console.log(err);
            return res.status(404).json({message: 'invalid user'});
        }
    })
}