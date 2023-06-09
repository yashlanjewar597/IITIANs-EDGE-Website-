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
    contact:Number,
    b_code:String
});

module.exports = mongoose.model("student", studentSchema)