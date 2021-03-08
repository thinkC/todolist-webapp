const express = require('express');
const cors = require('cors');
const mongose = require('mongoose'); // allows us to connect to mongodb database

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())

//get from mongodb atlass dashboard
const uri = process.env.ATLAS_URI;
mongose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongose.connection;
connection.once('open', ()=>{
    console.log('MongoDB connection established successfully!');
})

// require todos and users routes
const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

//using todos and user routes
app.use('/api/todos', todosRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log('server is running on Port ' + port)
})


