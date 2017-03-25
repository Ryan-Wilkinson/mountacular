var express = require('express');
router = express.Router({mergeParams: true});
var User = require('../models/userModel.js');
var Mount = require("../models/mountModel.js");
// var authHelpers = require('../helpers/authHelpers.js');

//LOGIN
router.get('/login', function(req, res) {
  res.render('users/login.hbs');
});









module.exports = router;
