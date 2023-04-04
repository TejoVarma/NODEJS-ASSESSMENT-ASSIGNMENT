const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const userRouters = require('./controller/user.controller');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.set("view engine", "ejs");


// app.use('/user',router)

app.get("/", userRouters.showUsers);

app.get("/allUser", userRouters.getUsers);

app.post("/user", userRouters.postUser);

app.get("/user/add", userRouters.addUser);


mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Failed to connect"));


app.listen(process.env.PORT, () => {
    console.log("Server is running");
})
