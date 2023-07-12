const mongoose = require("mongoose");

const facSchema = new mongoose.Schema({
    url:String,
    heading:String,
    para:String,
    href:String,
    id:String
});

module.exports = mongoose.model("faculty", facSchema);