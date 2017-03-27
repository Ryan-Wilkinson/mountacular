var express = require('express');
router = express.Router({mergeParams: true});
var User = require("../models/userModel.js");
var Mount = require("../models/mountModel.js");
var authHelpers = require('../helpers/authHelpers.js');

// GET EDIT MOUNT
router.get('/:id/edit', function(req, res) {
	User.findById(req.params.userId)
       .exec(function(err, user) {
         if (err) { console.log("not authorized"); }

	Mount.findById(req.params.id)
		.exec(function(err, mount) {
			if (err) { console.log(err); }
			res.render('mounts/edit', {
				mount: mount,
				user: user
			});
		});
	});
});










module.exports = router;
