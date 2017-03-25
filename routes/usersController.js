var express = require('express');
var router = express.Router();

var User = require("../models/userModel.js");
var Mount = require("../models/mountModel.js");

// USER IDEX, SHOWS ALL USERS SAVED
router.get('/', function(req, res) {
  User.find({})
  .exec(function(err, users){
    if (err) { console.log(err); }
    res.render('users/index.hbs', { 
    	users: users 
    });
  });
});

// USERS NEW CREATE ROUTE
router.get('/createaccount', function(req, res) {
	res.render('users/new');
});

// USERS NEW PUT ROUTE
router.put('/')








module.exports = router;
