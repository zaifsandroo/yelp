var mongoose = require("mongoose");
var campground = require("./models/campground.js");
var data= [
  {
  name:"jgsdfk",
          image:"jhgkdjhk.jpg"},
                  {
                    name:"sdfjgk",
                      image:"jhgkjhk.jpg"},
{
  name:"jdfggk",
image:"jhgkjhdfgk.jpg"}]
function seedDB(){
  // remove all camp grounds
campground.remove({},function(err){
  if(err){
    console.log(err);
  }
  console.log("removed campgrounds");
});

//add few campground
data.forEach(function(seed) {
  campground.create(seed , function(err,data){
    if(err){
      console.log(err);
    }else{
console.log("added a camp ground");
    }
  });


});
//add comments
}
module.exports = seedDB;
