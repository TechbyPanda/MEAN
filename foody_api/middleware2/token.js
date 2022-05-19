const jwt = require('jsonwebtoken');

exports.verifytoken = (req, res, next)=>{
    try{
        if(!req.headers.authorization)
            return req.status(401).send('unauthorized token');

        if(req.headers.authorization == null)
            return req.status(401).send('unauthorized token');

        let token = req.headers.authorization.split(' ')[1];
        let payload = jwt.verify(token, 'attack on titan');
        next();
        console.log(token);
        console.log(payload);
    }
    catch(err){
        return res.status(401).send('unauthorized token');
    }
}