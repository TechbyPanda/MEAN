const Admin = require('../model/admin.model');
const jwt = require('jsonwebtoken');
const token = require('../middleware/token');

exports.signin = (req,res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body);
    Admin.findOne(req.body).then(result=>{
        if(result){
            let payload = { subject: result._id };
            let token = jwt.sign(payload, 'fjhdfjsghkjsgskjgskjgkjjfh');
            return res.status(200).json({
                status: 'login success',
                current_user: result,
                token: token
            });
        }
        else{
            return res.status(404).json({message: 'invalid user'});
        }
    })
    .catch(err=>{
        console.error(err);
        return res.status(500).json({message: 'something went wrong'});
    })
}