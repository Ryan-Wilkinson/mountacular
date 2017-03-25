var express = require('express');
var router = express.Router();

//HOME PAGE
router.get('/', function(req, res) {
  res.render('index');
});

//ABOUT PAGE
router.get('/about', function(req, res) {
	res.render('about');
});


module.exports = router;
