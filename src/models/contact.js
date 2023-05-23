const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email:String,
    mobile:String,
    query:String
});

module.exports = mongoose.model("contact", contactSchema)