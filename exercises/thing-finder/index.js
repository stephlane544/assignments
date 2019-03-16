const express = require('express')
const app = express()
const port = 12000
const mongoose = require('mongoose')


app.use(express.json())

app.use('/items', require('./thingRoutes'))

mongoose.connect('mongodb://localhost:27017/things', {useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB')
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})