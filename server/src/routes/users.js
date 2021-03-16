const router = require('express').Router();
const { User } = require('../models/user.model');

router.get('/', async (req, res)=>{
    try{
        const users = await User.find()
        console.log(users)
        res.send(users)
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message)
    }
})

module.exports = router;