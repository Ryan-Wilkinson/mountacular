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
router.post("/", function(req, res) {
	console.log(req.body);
	var user = new User ({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		password: req.body.password
	});
	
	user.save(function(err, user) {
		if (err) { console.log(err); }
		console.log(user);
		res.redirect("/sessions/login");
	});
});








module.exports = router;
