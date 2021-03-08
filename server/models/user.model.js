const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{ type: String, required: true, minlength: 3, maxlength: 30},
    email:{type: String, required: true, minlength:3, maxlength: 15, unique: true},
    password:{type: String, required: true, minlength: 6, maxlength: 12}
    
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;

