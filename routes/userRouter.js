var express = require("express");
var userRouter  = express.Router();
const userController = require('../controllers/userController.js');
const mongoose = require('mongoose');
var passport = require("passport");
var User = mongoose.model('user');





// show register form
userRouter.get("/register", function(req, res){
   res.render("user/register"); 
});

//handle sign up logic
userRouter.post("/register", userController.createUser);

userRouter.get('/getUsers', userController.findAllUsers);

//update user route
userRouter.get('/updateUsers', function(req, res, next) {
    res.render('user/updateUsers');
});

userRouter.post('/update', userController.updateUser);

//delete user route
userRouter.get('/deleteUsers', function(req, res, next) {
    res.render('user/deleteUsers');
  });

userRouter.get('/deleteUsers_err', function(req, res, next) {
  res.render('user/deleteUsers_err');
});

userRouter.post('/delete', userController.deleteUser);

//show login form
userRouter.get("/login", function(req, res, next) {
    res.render('user/login');
  });

userRouter.get("/login_again", function(req, res, next) {
  res.render('user/login_again');
});

userRouter.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login_again"}), function(req, res){
});

// logout route
userRouter.get("/logout", userController.logOut);

userRouter.get("/profile", function(req, res, next) {
    res.render('user/profile');
  });
  
module.exports = userRouter;














