const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: {
        type: Boolean,
        default: true
    },
    bounty: Number,
    type: String,
    imageUrl: String
})

module.exports = mongoose.model('Bounty', bountySchema)