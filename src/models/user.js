const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        name: {
            type: String
        },
        bio: {
            type: String
        },
        phone: {
            type: String
        },
        photo: {
            type: String
        },
        privacy: {
            type: String,
            enum: ['public', 'private'],
            default: 'public' // By default, profile is public
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user' // By default, user role is 'user'
    }
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
