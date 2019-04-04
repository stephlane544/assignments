const express = require('express');
const User = require('../models/userModel')
const apiRoute = express.Router();


    apiRoute.put('/user/:id', async (req, res, next) => {
        try{
            let user = await User.findOneAndUpdate({_id: req.user._id}, req.body)
            if(user) res.status(200).send(user)
        }
        catch(err){
            return next(err)
        }
    })

    apiRoute.put('/user/:userId/notes/:noteId', async (req, res, next) => {
        try{
            const user = await User.findOne({_id: req.params.userId})
            const noteToChange = user.notes.id(req.params.noteId)
            noteToChange.set(req.body)
            console.log(noteToChange)
            user.save()
            if(noteToChange) {
                return res.status(200).send(user)
            }
        }
        catch (err){
            console.log(err)
            return next(err)
        }
    })

    apiRoute.put('/user/:userId/notes', async (req, res, next) => {
        try{
            const user = await User.findOne({_id: req.params.userId})
            user.notes.push(req.body)
            console.log(req.body)
            user.save()
            return res.status(200).send(user)
        }
        catch (err){
            console.log(err)
            return next(err)
        }
    })


    apiRoute.delete('/user/:userId/notes/:noteId', async (req, res, next) => {
        try{
            const user = await User.findOne({_id: req.params.userId})
            user.notes.pull(req.params.noteId)
            user.save()
            return res.status(200).send(user)
        }
        catch (err){
            console.log(err)
            return next(err)
        }
    })
    

    module.exports = (apiRoute)