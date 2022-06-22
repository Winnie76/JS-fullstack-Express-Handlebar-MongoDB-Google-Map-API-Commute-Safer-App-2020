const mongoose = require("mongoose");

//tip schema
const tipSchema = new mongoose.Schema({
  name: String,
  username:String,
},{collection: 'tips'});

mongoose.model("tips", tipSchema);
