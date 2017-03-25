var User = require("../models/userModel.js");

function loginUser(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({ username: username })
		.then(function(user) {
			if (user == null) {
				res.json({status: 401, data: "unauthorized"})
			}
			else if (password === user.password) {
				req.session.currentUser = user;
			}
			next();
		})
		.catch(function(err) {
			res.json({status: 500, data: err + " catch faulure"});
		});
};

module.exports = {
  loginUser: loginUser,
};