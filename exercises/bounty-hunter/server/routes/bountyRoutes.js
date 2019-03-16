const express = require('express')
const bountyRoute= express.Router()
const Bounty = require('../models/bountyModel')

bountyRoute.route('/')

        .get((req, res) => {
            Bounty.find((err, bounties) => {
                if(err){
                    return res.status(500).send(err)
                }
                return res.status(200).send(bounties)
            })
        })

        .post((req, res) => {
            if(Object.keys(req.body).length > 0){
                const newBounty = new Bounty(req.body);
                newBounty.save(err => {
                    if(err){
                        return res.status(500).send(err)
                    }
                    return res.status(200).send(newBounty);
                })
            }else{
                res.send('Not a valid Bounty.')
            }
        })


bountyRoute.route('/:_id')

        .get((req, res) => {
            const { _id } =  req.params;
            Bounty.findById(
                {_id},
                (err, bounty) => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send(bounty)
                }
            )
        })



        .delete((req, res) => {
            const { _id } = req.params;
            Bounty.findByIdAndDelete(
                {_id},
                req.body,
                (err, bounty) => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send('Item successfully deleted.')
                }
            )
        })

        .put((req, res) => {
            const { _id } =  req.params;
            Bounty.findByIdAndUpdate(
                {_id},
                req.body,
                (err, bounty) => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send(bounty)
                }
            )
        })



module.exports = (bountyRoute)
