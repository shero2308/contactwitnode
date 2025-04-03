const MongoDB = require('mongoose');

const UserSchema = MongoDB.Schema({
    username:{
        type: String,
        required: [true, 'Please add a username']
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: [true, 'Email already exists'],
    },
    password:{
        type: String,
        required: [true, 'Please add a user password'],
    }
},
{ timestamps: true });

module.exports = MongoDB.model('User', UserSchema);