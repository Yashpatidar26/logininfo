var mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/n13database");

var userSchema = mongoose.Schema({
  name:String,
  email:String,
  pno:Number,
  links:String,
  comments:String,
})

// var userModel = mongoose.model("users",userSchema);
module.exports = mongoose.model("users",userSchema);