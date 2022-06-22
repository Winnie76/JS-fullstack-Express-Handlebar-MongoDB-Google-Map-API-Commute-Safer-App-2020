var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

//user schema
var UserSchema = new Schema({
    email: String,
    username: String,
    password: {type: String, match:/^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,}
   
},{collection: 'user'});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("user", UserSchema);

