var express = require('express');
router = express.Router({mergeParams: true});
var User = require("../models/userModel.js");
var Mount = require("../models/mountModel.js");
var authHelpers = require('../helpers/authHelpers.js');
var mongoose = require("mongoose");

// NEW MOUNT POST ROUTE
router.post('/', function(req, res) {
	User.findById(req.params.userId)
		.exec(function(err, user) {
			if (err) { console.log(err); }

			var newMount = new Mount({
				name: req.body.name,
				foundAt: req.body.foundAt,
				obtainedHow: req.body.obtainedHow,
				description: req.body.description,
				icon: req.body.icon
			});
			newMount.save();
			user.mounts.push(newMount);
			user.save();
			res.redirect(`/users/${req.params.userId}`)
		});
});

// GET EDIT MOUNT
router.get('/:id/edit', function(req, res) {
	User.findById(req.params.userId)
       .exec(function(err, user) {
         if (err) { console.log("not authorized"); }
         var mount = user.mounts.id(req.params.id);
	// Mount.findById(req.params.id)
	// 	.exec(function(err, mount) {
	// 		if (err) { console.log(err); }
			res.render('mounts/edit', {
				mount: mount,
				user: user
			});
		});
	});

// EDIT PUT ROUTE
router.put('/:id', function(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) {console.log('user search error ' + err);}
      var editMount = user.mounts.id(req.params.id);
		editMount.name = req.body.name;
		editMount.foundAt = req.body.foundAt;
		editMount.obtainedHow = req.body.obtainedHow;
		editMount.description = req.body.description;
		editMount.icon = req.body.icon;
      user.save(function(err) {
        if (err) {console.log(err);}
		res.redirect(`/users/${req.params.userId}`);
      });
    });
});


// DELETE THE MOUNT
router.delete("/:id", function(req, res) {
	User.findByIdAndUpdate(req.params.userId, {
		$pull: {
			mounts: {_id: req.params.id}
		}
	})
		.exec(function(err, user) {
			if (err) { console.log(err); }
		});
	Mount.findByIdAndRemove(req.params.id)
		.exec(function(err, mounts) {
			if (err) { console.log(err); }
			res.redirect(`/users/${req.params.userId}`);
		});
});





module.exports = router;
