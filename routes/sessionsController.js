var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js');
// var authHelpers = require('../helpers/authHelpers.js');

// Login Page
router.get('/login', function(req, res) {
	res.render('/users/login')
});









module.exports = router;
