pry = require('pryjs');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
require('dotenv').config();

// Connect to database
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

FS.identify('58e45dfb3329290011033bc6', {
 displayName: 'Test',
 email: 'test@test.com'
});

// Sessions stuff
app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// CONTROLLERS
var indexController = require('./routes/indexController');
var usersController = require('./routes/usersController');
var mountsController= require('./routes/mountsController');
var sessionsController= require('./routes/sessionsController');

app.use('/', indexController);
app.use('/sessions', sessionsController);
app.use('/users', usersController);
app.use('/users/:userId/mounts', mountsController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
