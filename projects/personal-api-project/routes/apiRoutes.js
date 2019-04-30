const express = require('express');
const User = require('../models/userModel');
const apiRoute = express.Router();

    apiRoute.put('/user/:id', async (req, res, next) => {
        try{
            let user = awaitUser.findOneAndUpdate({_id:req.user._id}, req.body)
            if(user) res.status(200).send(user)
        }
        catch(err){
            return next(err)
        }
    })

    //adding a new score
    apiRoute.put('/user/:userId/scores', async (req, res, next) => {
        try{
            const user = await User.findOne({_id: req.params.userId})
            user.scores.push(req.body)
            console.log(req.body)
            user.save()
            return res.status(200).send(user)
        }
        catch(err){
            console.log(err)
            return next(err)
        }
    })

    module.exports = (apiRoute)