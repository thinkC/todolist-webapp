const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const { User } = require('../models/user.model');

//this create a mini app to have access to our endpoints
const router = express.Router();

router.post('/', async(req, res)=>{
       //creating schema and validating with joi
       const schema = Joi.object({
        email: Joi.string().min(3).max(200).email().required(),
        password: Joi.string().min(6).max(200).required()
    })

    //using schema to validate input
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try{
        //check if user already exist
    let user = await User.findOne({ email: req.body.email});
    //check if user exist or not
    if(!user) return res.status(400).send('invalide email or password');
        //compare password entered with password in database
        const validpassword = await bcrypt.compare(req.body.password, user.password);

        //if password is not valid , send error message
        if(!validpassword)
            return res.status(400).send('invalide email or password');
            const secretKey = process.env.SECRET_KEY;
            const token = jwt.sign({_id: user._id, name: user.name, email: user.email}, secretKey);
            res.send(token);
        
    }catch(erorr){
        res.status(500).send(error.message);
        console.log(error.message)
    }
})

module.exports = router;