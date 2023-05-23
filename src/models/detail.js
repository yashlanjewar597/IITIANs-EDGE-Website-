const mongoose = require("mongoose");

const stdSchema = new mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[{
        label:String,
        url:String
    }]
});

module.exports = mongoose.model("detail",stdSchema)