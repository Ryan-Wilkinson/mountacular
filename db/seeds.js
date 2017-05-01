var mongoose = require('mongoose');
var Mount = require("../models/mountModel.js");
var User = require("../models/userModel.js");

mongoose.promise = global.Promise;


// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/mountacular');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
})

User.remove({}, function(err) {
    console.log(err);
 });

// clear before re seed
// Mount.remove({}, function(err) {
//     console.log(err);
// });

// var user = new User ({
// 	firstName: "Charles",
// 	lastName: "Wilkinson",
// 	email: { type: "aol@aol.com", required: true, unique: true },
// 	username: { type: "cow", required: true, unique: true },
// 	password_digest: "password",
// 	mounts: [MountSchema]
// })

var blueBike = new Mount ({
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
	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs.'
});

var giantchicken = new Mount ({
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
	description: 'Giant robust, colorful, and regal chicken that I can ride around on and even fly for a short duration.'
});

var giantsnake = new Mount ({
	name: 'Giant Snake',
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
	description: 'A giant snake I tamed while exploring in the amazon, can ride around and scare the hell out of people.'
});

var tRex = new Mount ({
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
	description: 'A prehistoric T-Rex.'
});

var blueDragon = new Mount ({
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
	description: 'A giant blue dragon.'
});

var polarBear = new Mount ({
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
	description: 'Not your everyday coke drinking polar bear.'
});

var hawk = new Mount ({
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
	description: 'A majestic hawk that came to me and landed on my arm and said lets ride.'
});

var tigerS = new Mount ({
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
	description: 'A giant tiger with a saddle. Definitely not a frosted flakes mascot.'
});

var hellCrab = new Mount ({
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
	description: 'A sweet teal colored crab from hell who was born larger than his brothers and sisters and as of such was constantly picked on because of it.'
});

var giantShark = new Mount ({
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
	description: 'A deep sea giant, the king of the depths.'
});

User.save(function(err) {
  if (err) console.log(err);
  console.log('Blue Bike created');
});

giantchicken.save(function(err) {
  if (err) console.log(err);
  console.log('Giant Chicken created');
});

giantsnake.save(function(err) {
  if (err) console.log(err);
  console.log('Giant Snek created');
});

tRex.save(function(err) {
  if (err) console.log(err);
  console.log('T-Rex created');
});

blueDragon.save(function(err) {
  if (err) console.log(err);
  console.log('Blue Dragon created');
});

polarBear.save(function(err) {
  if (err) console.log(err);
  console.log('Polar Bear created');
});

hawk.save(function(err) {
  if (err) console.log(err);
  console.log('Hawk created');
});

tigerS.save(function(err) {
  if (err) console.log(err);
  console.log('Tiger created');
});

hellCrab.save(function(err) {
  if (err) console.log(err);
  console.log('Hell Crab created');
});

giantShark.save(function(err) {
  if (err) console.log(err);
  console.log('Giant Shark created');
});



