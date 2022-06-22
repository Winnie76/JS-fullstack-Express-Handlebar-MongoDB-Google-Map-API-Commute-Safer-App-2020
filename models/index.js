var mongoose = require('mongoose');

const uri = "mongodb+srv://xiaojing:llcoolj@cluster0-o1zib.mongodb.net/commute--safer?retryWrites=true&w=majority";

//connect to mongodb atlas
mongoose.connect(uri,
  {useNewUrlParser: true, useUnifiedTopology: true },
  function(err){
    if(!err){
      console.log('Connected to mongo.');
    }else{
      console.log('Failed to connect to mongo!', err);
    }
  });

require('./tip.js');
require('./pins.js');
require('./user.js');
