// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    dob: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

