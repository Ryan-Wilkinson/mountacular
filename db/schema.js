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
	dateObtained: {
		type: Date,
		default: Date.now
	},
	foundAt: String,
	obtainedHow: String,  // found/purchased/stole etc.
	description: String
});

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password_digest: String,
	mounts: [MountSchema]
});

// PRE SEED DATA FOR NEW USERS, NOT THAT CLEAN WILL DRY UP LATER
UserSchema.pre('save', function(next) {	
	if(this.isNew) {

		var blueBike = {
			name: 'Blue Bike',
			spellId: 1,
			creatureId: 1872364,
			itemId: 13489257,
			qualityId: 9,
			icon: 'http://www.bcbsnc.com/assets/campaigns/public/gonc/images/9234-bike.jpg',
			isGround: true,
			isFlying: false,
			isAquatic: false,
			isJumping: true,  // blizzard api ends here
			foundAt: 'The neighborhood junkyard',
			obtainedHow: 'Stole that shit',
			description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
		};

		var giantCock = {
			name: 'Giant Chicken',
			spellId: 2,
			creatureId: 1872365,
			itemId: 13489258,
			qualityId: 100,
			icon: 'http://i.imgur.com/q3n6YVs.jpg',
			isGround: true,
			isFlying: true,
			isAquatic: false,
			isJumping: true,  // blizzard api ends here
			foundAt: 'On the internet',
			obtainedHow: 'Pooped it out',
			description: 'Giant robust, colorful, and regal cock that I can ride around on and even fly for a short duration.'
		};

		var giantSnek = {
			name: 'Giant Snek',
			spellId: 3,
			creatureId: 1872366,
			itemId: 13489259,
			qualityId: 65,
			icon: 'http://vignette4.wikia.nocookie.net/cryptidz/images/2/2c/Giant_snake.jpg/revision/latest?cb=20141014163913',
			isGround: true,
			isFlying: false,
			isAquatic: false,
			isJumping: false,  // blizzard api ends here
			foundAt: 'The Amazon Jungle Boi',
			obtainedHow: 'Tamed his ass',
			description: 'A giant snek I tamed while exploring in the amazon, can ride around and scare the hell out of people.'
		};

		var tRex = {
			name: 'T-Rex',
			spellId: 4,
			creatureId: 1872367,
			itemId: 13489260,
			qualityId: 1000,
			icon: 'https://s-media-cache-ak0.pinimg.com/564x/3c/79/e0/3c79e0c936fee27b3f158e11034d132d.jpg',
			isGround: true,
			isFlying: false,
			isAquatic: false,
			isJumping: true,  // blizzard api ends here
			foundAt: 'The Museum',
			obtainedHow: 'Family Heirloom',
			description: 'A motha fuckin t rex, holy shit.'
		};

		var blueDragon = {
			name: 'Blue Dragon',
			spellId: 5,
			creatureId: 1872368,
			itemId: 13489261,
			qualityId: 99,
			icon: 'https://s-media-cache-ak0.pinimg.com/736x/61/93/10/619310c9dc117e7395c6cd6570de3825.jpg',
			isGround: true,
			isFlying: true,
			isAquatic: false,
			isJumping: true,  // blizzard api ends here
			foundAt: 'On a Snowy Hilltop',
			obtainedHow: 'Became best buds',
			description: 'A giant blue dragon that eats shit.'
		};

		var polarBear = {
			name: 'Polar Bear',
			spellId: 6,
			creatureId: 1872369,
			itemId: 13489262,
			qualityId: 101,
			icon: 'http://wowtcglootcards.com/images/big_blizzard_bear_wow_mount_loot_small.jpg',
			isGround: true,
			isFlying: false,
			isAquatic: true,
			isJumping: true,  // blizzard api ends here
			foundAt: 'North Pole',
			obtainedHow: 'Raised him from a small cub',
			description: 'Not your everyday coke drinking polar bear'
		};

		var hawk = {
			name: 'Hawk',
			spellId: 7,
			creatureId: 1872370,
			itemId: 13489262,
			qualityId: 29,
			icon: 'https://colltales.files.wordpress.com/2011/08/picture-14.png?w=474',
			isGround: false,
			isFlying: true,
			isAquatic: false,
			isJumping: true,  // blizzard api ends here
			foundAt: 'Backyard',
			obtainedHow: 'He found me',
			description: 'A majestic AF hawk that came to me and landed on my arm and said lets fucking ride'
		};

		var tigerS = {
			name: 'Tiger',
			spellId: 8,
			creatureId: 1872371,
			itemId: 13489263,
			qualityId: 63,
			icon: 'http://brain-on-fire.com/jefeblog/wp-content/uploads/2011/07/tigerwearingsaddle.jpg',
			isGround: true,
			isFlying: false,
			isAquatic: false,
			isJumping: true,  // blizzard api ends here
			foundAt: 'A golf course',
			obtainedHow: 'Pulled a thorn out of his paw',
			description: 'A giant tiger with a saddle. Definitely not a frosted flakes mascot'
		};

		var hellCrab = {
			name: 'Hell Crab',
			spellId: 9,
			creatureId: 1872372,
			itemId: 13489264,
			qualityId: 999,
			icon: 'https://cdnb.artstation.com/p/assets/images/images/004/384/571/large/kurt-papstein-hellcrab-mount-front.jpg?1483245408',
			isGround: true,
			isFlying: false,
			isAquatic: true,
			isJumping: true,  // blizzard api ends here
			foundAt: 'Goo Lagoon',
			obtainedHow: 'He was being bullied by other crabs',
			description: 'A sweet ass teal crab from hell who was born larger than his brothers and sisters and as of such was constantly picked on because of it.'
		};

		var giantShark = {
			name: 'Giant Shark',
			spellId: 10,
			creatureId: 1872373,
			itemId: 13489265,
			qualityId: 692,
			icon: 'http://vignette4.wikia.nocookie.net/dungeons/images/b/b4/Shark_mount_scaled.jpg/revision/latest?cb=20090922202838',
			isGround: false,
			isFlying: false,
			isAquatic: true,
			isJumping: false,  // blizzard api ends here
			foundAt: 'Atlantis',
			obtainedHow: 'Bested in a battle',
			description: 'A deep sea giant, the king of the depths. Ah who am I kidding, hes just a big ass shark who lost to me in a fight.'
		};

	this.mounts = [blueBike, giantCock, giantSnek, tRex, blueDragon, polarBear, hawk, tigerS, hellCrab, giantShark]

	}
//SAVE USER SCHEMA
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
