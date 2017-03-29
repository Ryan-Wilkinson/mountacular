var bcrypt = require('bcrypt-nodejs');
var User = require("../models/userModel.js");

function createSecure(req, res, next) {
  var password = req.body.password;
  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
}

// checks to see if there is a user logging in, and if the password matches the hashed password
function loginUser(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email })
  .then(function(foundUser){
    // console.log(foundUser);
    // console.log("_________________")
    // console.log(password)
    // console.log(foundUser.password_digest)
    // console.log(bcrypt.compareSync(password, foundUser.password_digest))
    // console.log("_________________")
    if (foundUser == null || !bcrypt.compareSync(password, foundUser.password_digest)) {
      res.json({status: 401, data: "unauthorized"});

    } else if (bcrypt.compareSync(password, foundUser.password_digest)) {
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
  createSecure: createSecure,
  loginUser: loginUser,
  authorized: authorized
};
