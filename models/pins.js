var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Float = require('mongoose-float').loadType(mongoose,10);
 
//pin schema
var pinSchema = new Schema({
    lat: {type: Float, required: true},
    lng: {type: Float, required: true},
    email: {type: String, required: true},
    comment: {type: String, required: true}
}, {collection: 'pins'});

mongoose.model('pins', pinSchema);