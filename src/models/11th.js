const mongoose = require("mongoose");

const batch1Schema = new mongoose.Schema({
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

})
module.exports= mongoose.model("std-11-student", batch1Schema)