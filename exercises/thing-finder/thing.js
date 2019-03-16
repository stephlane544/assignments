const mongoose = require('mongoose')
const Schema = mongoose.Schema

const thingSchema = new Schema({
    name: String,
    type: String,
    price: Number
})


module.exports = mongoose.model('Thing', thingSchema)