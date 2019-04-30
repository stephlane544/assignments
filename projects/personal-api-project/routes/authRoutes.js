const express = require('express');
const User = require('../models/userModel');
const authRoute = express.Router();
const jwt = require('jsonwebtoken');

authRoute.post('/signup', (req, res, next) => {
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        if(existingUser !== null){
            res.status(400);
            return next(new Error('That username already exists!'));
        }
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if(err){
                res.status(500);
                return next(err);
            }
            const token = jwt.sign(user.toObject(),
            process.env.SECRET)
            return res.status(201).send({
                success: true, user: user.toObject(), token});
        })
    })
});