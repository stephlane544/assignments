const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        required: true,
        type: String
    },
    services: {
        type: [String],
        required: true
    },
    phoneNumber: String,
    email: String,
    swapBucks: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)