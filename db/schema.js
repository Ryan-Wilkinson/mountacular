var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//USE NATIVE PROMISES
mongoose.Promise = global.Promise;

//SCHEMAS
var MountSchema = new Schema({
	name: String,
	spellId: Number,
	creatureId: Number,
	itemId: Number,
	qualityId: Number,
	icon: String,
	isGround: Boolean,
	isFlying: Boolean,
	isAquatic: Boolean,
	isJumping: Boolean,  // blizzard api ends here
	dateObtained: Date,
	foundAt: String,
	obtainedHow: String,  // found/purchased/stole etc.
	description: String
});

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	mounts: [MountSchema],
});

//SAVE MOUNT SCHEMA
MountSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

//SAVE USER SCHEMA
UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

//SET MODELS FOR EXPORT
var MountModel = mongoose.model("Mount", MountSchema);
var UserModel = mongoose.model("User", UserSchema);

//EXPORT MODELS
module.exports = {
	Mount: MountModel,
	User: UserModel
};
