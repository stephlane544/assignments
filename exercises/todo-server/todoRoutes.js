const express = require('express');
const todoRouter = express.Router()
const uuid = require('uuid');
const data = require('./database');

todoRouter.route('/')

        .get((req, res) => {
            res.send(data)
        })


        .post((req, res) => {
            const newObject = req.body;
            newObject._id = uuid.v4();
            const found = data.push(newObject);
            if(found){
                res.send(found);
            }else{
                res.send('Not found')
            }
        })

todoRouter.route('/:_id')

        .get((req, res) => {
            const { _id } = req.params;
            const found = data.find(object => object._id === _id)
            if(found){
                res.send(found)
            }else{
                res.send('Not found')
            }
        })

        .delete((req, res) => {
            const { _id } = req.params;
            const index = data.findIndex(object => object._id === _id)
            data.splice(index, 1);
            if(index){
                res.send('Item successfully removed.')
            }else{
                res.send('Item not removed.')
            }
        })

        .put((req, res) => {
            const { _id } = req.params;
            const updatedObject = req.body;
            const found = false;
            data.forEach(object => {
                if(object._id === _id){
                    object = Object.assign(object, updatedObject)
                    found = true;
                }
            })
            if(found){
                res.send('Item successfully updated.')
            }else{
                res.send('Not found')
            }
        })
