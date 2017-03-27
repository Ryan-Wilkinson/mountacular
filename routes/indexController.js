var express = require('express');
router = express.Router();

//HOME PAGE
router.get('/', function(req, res) {
  res.render('home');
});

//ABOUT PAGE
router.get('/about', function(req, res) {
	res.render('about');
});


module.exports = router;
