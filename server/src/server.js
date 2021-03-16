const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // allows us to connect to mongodb database

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

//get from mongodb atlass dashboard
// const uri = process.env.ATLAS_URI;
// mongose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

// const connection = mongose.connection;
// connection.once('open', ()=>{
//     console.log('MongoDB connection established successfully!');
// })


//connect to database
const connection_string = process.env.CONNECTION_STRING;
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connection established!..."))
  .catch((error) =>
    console.log("MongoDB connection failed..." + error.message)
  );


// require todos and users, signup routes
const todos = require('./routes/todos');
// const usersRouter = require('./routes/users'); //delete this later
const signup = require('./routes/signup');
const signin = require('./routes/signin');
const users = require('./routes/users');

//using todos, user, signup routes
app.use('/api/todos', todos);
app.use('/api/signup', signup);
app.use('/api/signin', signin);
app.use('/api/users', users);

app.listen(port, ()=>{
    console.log('server is running on Port ' + port)
})


