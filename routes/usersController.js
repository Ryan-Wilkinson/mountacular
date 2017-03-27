var express = require('express');
router = express.Router({mergeParams: true});
var User = require("../models/userModel.js");
var Mount = require("../models/mountModel.js");
var authHelpers = require('../helpers/authHelpers.js');

// USERS NEW CREATE ROUTE
router.get('/createaccount', function(req, res) {
	res.render('users/new');
});

// USERS SHOW ROUTE
router.get('/:id', authHelpers.authorized, function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user){
    if (err) {console.log(err);}
    res.render('./users/show', {
      user: user
    });
  });
});

// USERS NEW POST ROUTE
router.post('/', authHelpers.createSecure, function(req, res) {
	var user = new User ({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		password_digest: res.hashedPassword
	});

	user.save(function(err, user) {
		if (err) { console.log(err); }
		console.log(req.session.currentUser);
		res.redirect("/sessions/login");
	});
});





module.exports = router;
