const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    name:{
        type : String,
        required : true
    }, 
    email :{
        type : String,
        required : true
    }, 
    age:{
        type : Number,
        required : true
    }, 
    city:{
        type : String,
        required : true
    }, 
    profession : {
        type : String,
        required : true
    }
});

const UserModel = mongoose.model("UserData", userSchema);

module.exports = UserModel;