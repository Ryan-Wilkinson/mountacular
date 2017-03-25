var express = require("express");
var router = express.Router({ mergeParams: true });

var User = require("../models/userModel.js");
var Mount = require("../models/mountModel.js");

//HOME PAGE
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
