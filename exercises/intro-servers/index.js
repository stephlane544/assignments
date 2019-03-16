const express = require('express')
const app = express()
const uuid = require('uuid')
const port = 7000
app.use(express.json())

const data = require('./database')

app.get('/food',(req, res) => {
    res.send(data)
})

app.get('/food/:_id', (req, res) => {
    const {_id} = req.params;
    res.send(data.find(food => food._id === _id))
})

app.post('/', (req, res) => {
    const newObject = req.body;
    newObject._id = uuid.v4();
    data.push(newObject);
    res.send(newObject);
})

app.delete('/food/:_id', (req, res) => {
    const { _id } = req.params;
    const index = data.findIndex(food => food._id === _id)
    data.splice(index, 1)
    res.send('Item successfully removed.')
})

app.put('/food/:_id', (req, res) => {
    const { _id} = req.params;
    const updatedObject = req.body;
    data.forEach(food => {
        if(food._id === _id){
            food = Object.assign(food, updatedObject)
        }
    })
    res.send('Item successfully updated.')
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})