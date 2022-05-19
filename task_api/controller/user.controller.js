const model = require('../model/user.model');

exports.signup = (req,res) => {
    model.create(req.body)
    .then(result => {
        return res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    })
}