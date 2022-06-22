const express = require('express');
var mongoose = require("mongoose");
const pinRouter = express.Router();
const pinController = require('../controllers/pinController.js');




pinRouter.get('/registerPins', function(req, res, next) {
     res.render('pin/registerPins');
   });

pinRouter.get('/updatePins_err', function(req, res, next) {
  res.render('pin/updatePins_err');
});

pinRouter.get('/updatePins', function(req, res, next) {
    res.render('pin/updatePins');
  });

pinRouter.get('/deletePins', function(req, res, next) {
    res.render('pin/deletePins');
  });

pinRouter.get('/deletePins_err', function(req, res, next) {
  res.render('pin/deletePins_err');
});


pinRouter.get('/getPins', pinController.findAllPins);

pinRouter.post('/insertPin', pinController.createPin);

pinRouter.post('/updatePin', pinController.updatePin);

pinRouter.post('/deletePin', pinController.deletePin);




module.exports = pinRouter;
