//Campground Create
var mongoose = require("mongoose");
var campgroundSchema = new mongoose.Schema({
  name:String,
  image:String
});

module.exports = mongoose.model("campground",campgroundSchema);
