var express = require('express');
var router = express.Router();

// USERS NEW CREATE ROUTE
router.get('/createaccount', function(res, req) {
	res.render('users/new');
});









module.exports = router;
