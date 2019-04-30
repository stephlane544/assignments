const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    email: {
        type: String,
        required: String
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    scores: [
        {
            score: Number
        }
    ]
})

userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) {
            return callback(err)
        }
        callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function(){
    const user = this.toObject();
    delete user.password
    return user
}

module.exports = mongoose.model('User', userSchema)