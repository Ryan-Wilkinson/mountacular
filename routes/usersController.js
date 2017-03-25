var express = require('express');
var router = express.Router();

var User = require("../models/userModel.js");
var Mount = require("../models/mountModel.js");

// USERS NEW CREATE ROUTE
router.get('/createaccount', function(req, res) {
	res.render('users/new');
});









module.exports = router;
