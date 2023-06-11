const express = require("express");
const { route } = require("express/lib/application");
const Detail = require("../models/detail")
const routes = express.Router();
const slider = require("../models/slider");
const Service = require("../models/service");
const contact = require("../models/contact");
const Student = require("../models/students");
const ele = require("../models/11th");
const twe = require("../models/12th");

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

routes.get("/signin", async function(req,res){
        await Detail.findOne({"_id":"6469fac6b6b1c6e6933c9d31"}).then(function(data){

        res.render("signin",{details:data})
})}
);

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
routes.get("/about",async  (req,res) =>{
        const details = await Detail.findOne({"_id":"6469fac6b6b1c6e6933c9d31"});
        const service = await Service.find();
        res.render("faculty", {details:details, services:service})
})

routes.get("/courses", async (req,res) => {
        const details = await Detail.findOne({"_id":"6469fac6b6b1c6e6933c9d31"});
        const service = await Service.find();
        res.render("courses",{data:details, services:service});

})

routes.get("/signup", async (req,res) => {
        const details = await Detail.findOne({"_id":"6469fac6b6b1c6e6933c9d31"});
        res.render("signup",{details:details});
})

routes.get("/thankyou", (req,res) => {
        res.render("thankyou");
})
routes.post("/signin", async (req,res) => {
        const email = req.body.email;
        const password = req.body.password;
        Student.findOne({email:email}).then((data) =>{
                if(!data){
                        res.send("Email does not exists, please sign up");
                }else{
                        if(data.password===password){
                                res.redirect("/");
                        }else{
                                res.send("Password Mismatch");
                        }
                }
        });
});

routes.post("/signup", async (req,res) => {
        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;
        const contact = req.body.contact;
        const b_code = req.body.batchcode;
        console.log(fname);
        Student.findOne({email:email}).then( function(data){
                if (!data){
                        if(b_code === "ELEVENTH"){
                        ele.create({
                                fname:fname,lname:lname,email:email, contact:contact,b_code:b_code
                        })}
                        else if(b_code === "TWELFTH"){
                                twe.create({
                                        fname:fname,lname:lname,email:email, contact:contact,b_code:b_code
                                })
                        }
                        ;
                        res.redirect("/thankyou");
                }else{
                        console.log(" Error...! Email already registered")
                }
        }
        )
})


module.exports = routes;