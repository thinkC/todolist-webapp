const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {type:String, required: true, minlength:3, maxlength:200},
    author: {type: String, minlength:3, maxlength:30},
    uid: String,
    isComplete: Boolean,
    date: { type: Date, default: new Date()}
}, {
    timestamps: true
})

//creating a mongoose Model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;