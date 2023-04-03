const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user.model');
const userRoutes = {};

userRoutes.postUser = async function(req,res){
    try
    {
        const newUser = await new User(req.body);
        let user = newUser.save();
        res.status(200).json({status: "Success", result:newUser});
    }
    catch(err)
    {
        res.status(400).json({status: "Failed", result : err.message});
    }
};

userRoutes.getUser = async function(req,res){
    try
    {
        const users = await User.find();
        res.status(200).json({status: "Success", result:users});
    }
    catch(err)
    {
        res.status(400).json({status: "Failed", result : err.message});
    }
};

module.exports = userRoutes;