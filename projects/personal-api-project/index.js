const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const path = require('path');

app.use(express.json());
app.use('/api', expressJwt({secret: process.env.SECRET}));
app.use('/api', require('./routes/apiROutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use(express.static(path.join(__dirname, 'cient', 'build')));

app.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError'){
        res.status(err.status);
    }
    return res.send({message: err.message})
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27107/triviaUsers', {useNewUrlParser: true}).then(() => {
    console.log('Connection to MongoDB')
}).catch(err => console.log(err));

app.length('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})