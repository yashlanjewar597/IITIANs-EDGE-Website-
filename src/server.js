const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/main.js");
const dotenv = require("dotenv");
dotenv.config();
const hbs = require("hbs");
const mongoose = require("mongoose");
const slider = require("./models/slider.js");
const app = express();
const Detail = require("./models/detail.js");
const Service = require("./models/service.js");

app.set("view engine","hbs");
app.set("views","views");
hbs.registerPartials("views/partials");
app.use("/static",express.static("public"));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use("",routes);

async function run(){
    try{
        await mongoose.connect(process.env.URI);
    }finally{
        console.log("Succesfully established connection with database.........!");

        // Service.create([{
        //     icon:"fa-solid fa-folder-open",
        //     title:"Provides Best Sevices",
        //     description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        //     link:"google.com",
        //     redirect:"/click"

        // },
        // {
        //     icon:"fa-solid fa-graduation-cap",
        //     title:"Quality Teaching",
        //     description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
        //     link:"google.com",
        //     redirect:"/click"

        // },
        // {
        //     icon:"fa-solid fa-user-graduate",
        //     title:"Excellent Tutors",
        //     description:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae",
        //     link:"google.com",
        //     redirect:"/check"

        // }])



        // slider.create({
        //     title: "Anime3",
        //     subtitle:"Anime Backgrounds 3",
        //     url:"/static/images/s3.jpg"
        // });
        // Detail.create({
        //     brandName:"IITIANs EDGE",
        //     brandIconUrl : "/static/images/logo",
        //     links:[
        //         {
        //         label:"Home",
        //         url:"/"
        //     },{
        //         label:"Services",
        //         url:"/services"
        //     },{
        //         label:"About",
        //         url:"/about"
        //     },{
        //         label:"Gallery",
        //         url:"/gallery"
        //     },{
        //         label:"Contact us",
        //         url:"/contact-us"
        //     }
        // ]
        // })
    }
}
run().catch(err => console.log(err));


app.listen(process.env.PORT | 3000, function(){
    console.log("Server started on port 3000.........!");
})