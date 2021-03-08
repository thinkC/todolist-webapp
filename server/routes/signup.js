const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const { User } = require('../models/user.model');

//this create a mini app to have access to our endpoints
const router = express.Router();

router.post('/', async (req, res)=>{
   //creating schema and validating with joi
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(200).email().required(),
        password: Joi.string().min(6).max(200).required()
    })

    //using schema to validate input
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    try{
    //check if user already exist
    let user = await User.findOne({ email: req.body.email});
    let userEnteredEmail = req.body.email;
    if(user) return res.status(400).send(`User with email ${userEnteredEmail} already exist...`)

     //destructure name, email and password
     const { name, email, password } = req.body;

     user = new User({
         name, email, password
     })

      //hashing our password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    //save user to database
    await user.save()
    // res.send('user created')

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({_id: user._id, name: user.name, email: user.email}, secretKey);
    res.send(token);

    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message)
    }

})

module.exports = router;