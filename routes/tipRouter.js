const express = require('express');
var mongoose = require("mongoose");

const tipRouter = express.Router();
const tipController = require("../controllers/tipController.js")

//initial page for tips
tipRouter.get("/",(req,res) => {
    res.render("tip/addOrEdit",{
        viewTitle:"Contribute a Helpful Safety Tip"
    })
});

//Get list of all tips
tipRouter.get('/list', tipController.getAllTips);

//Get a tip by ID
tipRouter.get('/:id', tipController.getTipById);


tipRouter.post("/", tipController.addOrUpdateTips);

//handle request to delete by ID
tipRouter.get('/delete/:id', tipController.deleteTipById);

//export the router
module.exports = tipRouter;
