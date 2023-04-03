const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const router = require('./src/routes/user.routes');
const userRoutes = require('./src/controllers/user.controller');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.set("view engine", "ejs");

const users = await yfetch("http://localhost:3000/user/show")
.then(res => res.json())
.then(res => res.result);


app.use('/user',router)
app.post('/user', router.post);
app.get("/user/users", function (req, res) {
    res.send(`${users.map((user)=>{
        `<table>
            <tr>
                <th>${name}</th>
                <th>${email}</th>
                <th>${age}</th>
                <th>${city}</th>
                <th>${profession}</th>
            </tr>
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.city}</td>
                <td>${user.profession}</td>
            </tr>`
    })}`)
}, router.get);

mongoose.connect('mongodb://localhost:27017/USERDATA')
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Failed to connect"));


app.listen(3000, () => {
    console.log("Server is running");
})
