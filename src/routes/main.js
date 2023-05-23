const express = require("express");
const { route } = require("express/lib/application");
const Detail = require("../models/detail")
const routes = express.Router();
const slider = require("../models/slider");
const Service = require("../models/service");
const contact = require("../models/contact");


routes.get("/", async (req,res) =>{
        const details = await Detail.findOne({"_id":"6469fac6b6b1c6e6933c9d31"});
    
        const Slider = await slider.find();

        const service = await Service.find();
        
        res.render("index", {data:details, images:Slider, services:service});
        
        //console.log(Slider);
}
);

routes.get("/gallery" , async (req,res) => {
    
        await Detail.findOne({"_id":"6469fac6b6b1c6e6933c9d31"}).then( function(data){
        
          res.render("gallery", {details:data})
          console.log(data);
    })
    .catch(err => console.log(err));
});

routes.post("/contact-us", function(req,res){
        const email = req.body.email;
        const mobile = req.body.mobile;
        const query = req.body.query;
        contact.create({
                email:email,
                mobile:mobile,
                query:query
        });
        res.redirect("/");


});

module.exports = routes;