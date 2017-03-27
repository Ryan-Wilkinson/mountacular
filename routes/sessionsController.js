var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/userModel.js');
var Mount = require('../models/mountModel.js');
var authHelpers = require('../helpers/authHelpers.js');

//LOGIN PAGE
router.get('/login', function(req, res) {
  res.render("users/login");
});

//LOGIN
router.post('/login', authHelpers.loginUser, function(req, res){
  res.redirect(`/users/${req.session.currentUser._id}`);
});








module.exports = router;
