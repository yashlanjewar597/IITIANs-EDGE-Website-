const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    link:String,
    redirect:String
});
module.exports = mongoose.model("service", serviceSchema)