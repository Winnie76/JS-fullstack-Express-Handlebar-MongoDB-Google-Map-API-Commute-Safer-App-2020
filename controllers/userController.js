var express = require("express");
var mongoose = require('mongoose');
var User = mongoose.model('user');
var passport = require("passport");

//find all user from database and put on getUsers page
var findAllUsers = function(req, res, next) {
    User.find()
        .lean()
        .then(function(doc) {
            res.render('user/getUsers', {items: doc});
        });
};

//register user 
var createUser = function(req, res){
    var newUser = new User({username: req.body.username, email: req.body.email, password: req.body.password});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("user/register_err");
        }else{
            passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome  " + user.username);
           res.redirect("/"); 
        });
        }
    });
 
};


//update existing user information
var updateUser = function(req, res, next) {
    User.findOne( {email: req.body.email, password: req.body.password}, (err, user)=>{
        if(user){ 
            user.email=req.body.email;
            user.username = req.body.username;
            user.password = req.body.password;
            user.save();
            res.redirect('/');
        }else{
            console.error( 'user or password incorrect');
            res.render('user/updateUsers_err');
        }
    });
    
};

//delete existing users
var deleteUser = function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne( {email},(err, user)=>{
        if(user){
            User.findOne( {email, password},(err, user)=>{
                if(user){
                    user.remove();
                    res.redirect('/');
                }else{
                    res.redirect('/user/deleteUsers_err');
                }
            });
        }else{
            res.redirect('/user/deleteUsers_err');
        }
    });      
};


//logout the current user
var logOut = function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/");
 };

module.exports = {
findAllUsers,
createUser,
deleteUser,
updateUser,
logOut
}