var express = require('express');
router = express.Router({mergeParams: true});
var User = require('../models/userModel.js');
var authHelpers = require('../helpers/authHelpers.js');

//LOGIN
router.get('/login', function(req, res) {
  res.render('users/login.hbs');
});

router.post('/login', authHelpers.loginUser, function(req, res){
  res.redirect(`/users/${req.session.currentUser.id}`);
});






module.exports = router;
