var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var comment = require("./models/comments");
//var user = require("./models/user");
//var seedDB = require("./seeds");
var mongoose = require("mongoose");
var campground = require("./models/campground.js");

//seedDB();
mongoose.connect("mongodb://localhost/Yelpcamp");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",function(req,res){
  res.render("home");
});
/*/SCHEMA SETUPa
var campgroundSchema = new mongoose.Schema({
  name:String,
  image:String
});
var campgroundSchema = mongoose.model("campground",campgroundSchema);
*/
campground.create(
  {

      name:"gulmarg",
      image:"https://www.hlimg.com/images/places2see/300X200/9_1490345388p.jpg"
  },function(err,Campground){
      if(err){
        console.log(err);
  }   else {
        console.log("newly created camp ground");
        console.log("campgrounds");
  }

});









var campgrounds=[
  //{name:"Gulmarg",image: "https://www.hlimg.com/images/places2see/300X200/9_1490345388p.jpg"},
  {name:"Pahalgam",image: "https://1913578542.rsc.cdn77.org/pictures/travel_guide/attractions/pahalgam-head-188.jpeg"},
  {name:"Sonamarg",image: "https://www.holidify.com/images/compressed/2902.jpg"},
  {name:"Dal_Lake",image: "http://data1.ibtimes.co.in/cache-img-0-450/en/full/661912/1516689549_india.jpg"},
  {name:"Pari_Mahal",image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Pari_Mahal1.jpg"}
]
//route
app.get("/campgrounds",function(req,res){
campgrounds.find(function(err,campgrounds){
  if(err){
    console.log(err);
      }
      else {
        res.render("grounds",{campgrounds:campgrounds});
      }
});


//res.render("grounds",{campgrounds:campgrounds});


});
app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});
app.post("/campgrounds",function(req,res){
  //get data from form
  //redirect
  var name = req.body.name;
  var image = req.body.image;
  var newcampground = {name:name,image:image}
campgroundSchema.create(newcampground,function(err,newlycreated){
  if(err){
    console.log(err);
      }
      else {
        res.redirect("/campgrounds");
      }
});

  res.redirect("/campgrounds");
});

app.listen(5000,function(){
  console.log("The Yelp Camp Has Started");
});
