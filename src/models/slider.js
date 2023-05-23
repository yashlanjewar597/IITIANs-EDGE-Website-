const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    url:String,
    class:String
});

module.exports = mongoose.model("slider", sliderSchema)