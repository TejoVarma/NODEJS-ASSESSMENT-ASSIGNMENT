const express = require('express');
const ejs = require('ejs');
const User = require('../models/user.model');
const userRouters = {};

userRouters.showUsers = async function(req, res){
    try {
        res.status(200).render("pages/table.ejs")
    } catch (err) {
        res.status(404).send("404 Not found")
    }
};

userRouters.getUsers = async function(req, res){
    try {
        let allUser = await User.find();
        res.status(200).json(allUser);
    } catch (err) {
        res.status(404).send("404 Not found")
    }
}

userRouters.postUser = async function(req, res){
    try {
        let newUser = await User(req.body);
        await newUser.save();
        res.redirect("/")
    } catch (err) {
        res.status(404).send("404 Not found")
    }
}

userRouters.addUser = async function(req, res){
    try {
        res.status(200).render("pages/newUser.ejs");
    } catch (err) {
        res.status(404).send("404 Not Found")
    }
}

module.exports = userRouters;