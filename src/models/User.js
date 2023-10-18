const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema, 'users');