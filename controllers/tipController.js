const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// import model
const Tip = mongoose.model("tips");



//add a new tip
function addTip(req,res){
  var tip = new Tip();
  tip.name = req.body.name;
  tip.username = req.body.username;
  tip.save((err,doc) => {
       if(!err){
        res.redirect('/tip/list');
       }
       else{ console.log("Error occured during insertion" + err);}
    });
  };


//updateTip
function updateTip(req,res){
  Tip.findOneAndUpdate({_id:req.body._id,},req.body,{new:true},(err,doc) => {
        if(!err){
            res.redirect('/tip/list');
        }
        else{
                console.log("Error occured in Updating the tip" + err);
            }
        })
};

//combine add and update for Post request
var addOrUpdateTips = (req,res) => {
    if(req.body._id == "")
    {
    addTip(req,res);
    }
    else{
        updateTip(req,res);
    }
}

//get the list of all tips
var getAllTips = (req,res) => {
    Tip.find().
    lean().
    exec(function(err,docs) {
        if(!err) {
            res.render("tip/list",{
               list:docs})
        }
    })
};


//get tip by id
var getTipById = (req,res) => {
    Tip.findById(req.params.id).
    lean().
    exec(function(err,doc) {
        if(!err){
            res.render("tip/addOrEdit",{
                viewTitle: "Update Tip",
                tip: doc
            })
        }
      })
    };


//delete by id
var deleteTipById = (req,res) => {
    Tip.findByIdAndRemove(req.params.id,(err,doc) => {
        if(!err){
            res.redirect('/tip/list');
        }
        else{
            console.log("An error occured during the Deleting Process" + err);
        }
    })
};





module.exports = {
  getAllTips,
  getTipById,
  deleteTipById,
  addOrUpdateTips,
};
