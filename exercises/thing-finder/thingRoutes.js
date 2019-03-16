const express = require('express')
const thingRouter = express.Router()
const data = require('./database')
const Thing = require('./thing')

thingRouter.route('/')
        .get((req, res) => {
            let {name, type, price, maxPrice, minPrice} = req.query;
            console.log(req.query)
            if(name){
                const nameObj = data.filter(item => item.name === name)
                res.send(nameObj)
            }else if(type){
                const typeObj = data.filter(item => item.type === type)
                res.send(typeObj) 
            }else if(price){
                const priceObj = data.filter(item => item.price === price)
                res.send(priceObj) 
            }else if(maxPrice && minPrice){
                const maxAndMinPriceObj = data.filter(item => item.price < maxPrice && item.price > minPrice)
                res.send(maxAndMinPriceObj) 
            }else if(maxPrice){
                const maxPriceObj = data.filter(item => item.price < maxPrice)
                res.send(maxPriceObj) 
            }else if(minPrice){
                const minPriceObj = data.filter(item => item.price > minPrice)
                res.send(minPriceObj) 
            }else{
                res.send(data)
            }
        })


        .post((req, res) => {
            const newObj = new Thing(req.body)
            newObj.save(err => {
                if (err){
                    return res.status(500).send(err)
                }
                return res.status(200).send(newObj)
            })
        })
module.exports = (thingRouter)