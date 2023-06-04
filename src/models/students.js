const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("student", studentSchema)