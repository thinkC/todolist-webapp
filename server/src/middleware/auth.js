const jwt = require('jsonwebtoken');

function auth(req, res, next){
    //get token from header
    const token = req.header('x-auth-token');

    //check if token exist
    if(!token) return res.status(401).send('Not authorized...')
    //verify token
    try{
        const secretKey = process.env.SECRET_KEY;
        const payload = jwt.verify(token, secretKey);
        req.user = payload;
        next();
    }catch(error){
        res.status(400).send('invalid token')
    
    }
    
}

module.exports = auth;