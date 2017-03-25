var bcrypt = require('bcrypt-nodejs');
var User = require('../models/userModel.js');

function loginUser(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email })
  .then(function(foundUser){
    if (foundUser == null) {
      res.json({status: 401, data: "unauthorized"});

    } else if (bcrypt.compareSync(password, foundUser.password)) {
      req.session.currentUser = foundUser;
    }
    next();
  })
  .catch(function(err){
    res.json({status: 500, data: err});
  });
}

//create a function called "authorized" that checks if the CurrentUser's id matches the id in params
function authorized (req, res, next) {
  if(!req.session.currentUser || req.params.id !== req.session.currentUser._id) {
    res.json({status: 404, data: 'oops you\'re not authorized, teehee'});
  }
  next();
}

//Export this function below:

module.exports = {
  loginUser: loginUser,
  authorized: authorized
};