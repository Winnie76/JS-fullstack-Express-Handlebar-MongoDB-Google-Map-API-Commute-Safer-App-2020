var mongoose = require('mongoose');
var Pin = mongoose.model('pins');

//find all pins in mongodb and put on map
var findAllPins = function(req, res, next) {
    Pin.find()
       .lean()
       .then(function(doc) {
        res.render('pin/getPins', {items: doc});

        });
};


//create new unsafe pins
var createPin = function(req, res, next) {
    var item = {
        lat: req.body.lat,
        lng: req.body.lng,
        email: req.body.email,
        comment: req.body.comment,
    };

    var items = new Pin(item);
    items.save();
    res.redirect('/pin/getPins');
};

//update existing pin
var updatePin = function(req, res, next) {
    var lat = req.body.lat;
    var lng = req.body.lng;
    var email = req.body.email;
    Pin.findOne( {email, lat, lng}, (err, pin)=>{
        if(pin){ 
            pin.email=req.body.email;
            pin.lat = req.body.lat;
            pin.lng = req.body.lng;
            pin.comment = req.body.comment;
            pin.save();
            res.redirect('/pin/getPins');
        }else{
            
            res.redirect('/pin/updatePins_err');
        }
    });
    
};

//delete existing pin
var deletePin = function(req, res, next) {
    var lat = req.body.lat;
    var lng = req.body.lng;
    var email = req.body.email;
    Pin.findOne( {lat,lng,email},(err, pin)=>{
        if(pin){
            pin.remove();
            res.redirect('/pin/getPins');
        }else{
            res.redirect('/pin/deletePins_err');
        }
    });      
};


module.exports = {
  findAllPins,
  createPin,
  updatePin,
  deletePin,
};
