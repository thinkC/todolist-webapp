const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api/server', (req, res, next)=>{
    console.log(req.body);
    res.status(201).json({
        message:'Todo created successfully'
    })
})

//cor
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/todos', (req, res, next)=>{
   const todos = [
       {
        id: 1,
        text: 'Buy Groceries'
       },
       {
        id: 3,
        text: 'Read Bible'
    }
   ] 
   res.status(200).json(todos)
})

module.exports  = app;