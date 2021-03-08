const router = require('express').Router();
let Todo = require('../models/todo.model');

// router.route('/').get((req, res)=>{
//     Todo.find()
//     .then(todos => res.json(todos))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res)=>{
//     const username = req.body.username;
//     const text = req.body.text;

    
// const newTodo = new Todo({
//     username,
//     text
// });

// newTodo.save()
// .then(()=> res.json('Todo added'))
// .catch(err => res.status(400).json('Error ' + error))
// });

router.get('/', async(req, res)=>{
    try{
        const todos = await Todo.find()
    .sort({date: -1})
    res.send(todos)
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message)
    }
    
})

router.post('/', (req, res)=>{
    const { text, isComplete, author, date, uid} = req.body;
    let todo = new Todo ({
        text: text,
        author: author,
        date: date,
        isComplete: isComplete,
        uid: uid

    })
    todo.save()
    .then((todo)=>{
        res.send(todo)
    }).catch((error)=>{
        console.log(error.message)
    })
});

router.delete('/:id' ,async(req, res)=>{
    try{
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deletedTodo)
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
    
})

module.exports = router