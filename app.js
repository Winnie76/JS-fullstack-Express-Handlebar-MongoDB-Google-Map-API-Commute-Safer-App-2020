//load express & dependencies
const express = require('express');
const app = express();
const path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expresshbs = require('express-handlebars');
var flash       = require("connect-flash");
var passport    = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
require("./models/user");
const mongoose = require('mongoose');
var User = mongoose.model('user');



//import routers
require('./models/index.js');
const tipRouter = require('./routes/tipRouter');
const pinRouter = require('./routes/pinRouter');
const userRouter = require("./routes/userRouter");

//for user authentication
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Commute Safer!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//access user status for login/logout
app.use(function(req, res, next){
  if(req.user ){
   res.locals.currentUser = {username:req.user.username,email:req.user.email,password:req.user.password };
   res.locals.user = req.user;
  }else{
    res.locals.currentUser = {  };
  }
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();

});

//view engine setup hbs
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', expresshbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

var hbs = expresshbs.create({});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// load lat, lng and comment about markers from mongodb database
hbs.handlebars.registerHelper("loadmarkers", function(items){
  // var results = [];
  // iterate through markers
  returnString ="";
  if (items)
  for (var i = 0; i < items.length; i++) {
      returnString += "addMarker( { lat:" + items[i].lat + ", lng:" + items[i].lng +  "}, map, '" + items[i].comment + "'); ";
    };
    return returnString
});

//homepage
app.get('/', (req, res) => {
  res.render('home');
});

// the user routes are added onto the end of '/user'
app.use("/user", userRouter);

// the pin routes are added onto the end of '/pin'
app.use('/pin', pinRouter);

// the pin routes are added onto the end of '/pin'
app.use('/tip',tipRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




//runs app
app.listen(process.env.PORT || 3004, () => {
 console.log("The app is running!");
});


module.exports = app;
