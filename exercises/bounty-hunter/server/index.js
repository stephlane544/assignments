const express = require('express');
const app = express();
const port = 13000
const mongoose = require('mongoose')

app.use(express.json())

app.use('/bounties', require('./routes/bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB')
}).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})