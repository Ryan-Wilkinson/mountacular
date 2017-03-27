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

// clear before re seed
Mount.remove({}, function(err) {
    console.log(err);
});

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
	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
});

var giantCock = new Mount ({
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
});

var giantSnake = new Mount ({
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
	creatureId: 187237,
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
});

// var blueBike = new Mount ({
// 	name: 'Blue Bike',
// 	spellId: 1,
// 	creatureId: 1872364,
// 	itemId: 13489257,
// 	qualityId: 9,
// 	icon: 'http://www.bcbsnc.com/assets/campaigns/public/gonc/images/9234-bike.jpg',
// 	isGround: true,
// 	isFlying: false,
// 	isAquatic: false,
// 	isJumping: true,  // blizzard api ends here
// 	foundAt: 'The neighborhood junkyard',
// 	obtainedHow: 'Stole that shit',
// 	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
// });

// var blueBike = new Mount ({
// 	name: 'Blue Bike',
// 	spellId: 1,
// 	creatureId: 1872364,
// 	itemId: 13489257,
// 	qualityId: 9,
// 	icon: 'http://www.bcbsnc.com/assets/campaigns/public/gonc/images/9234-bike.jpg',
// 	isGround: true,
// 	isFlying: false,
// 	isAquatic: false,
// 	isJumping: true,  // blizzard api ends here
// 	foundAt: 'The neighborhood junkyard',
// 	obtainedHow: 'Stole that shit',
// 	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
// });

// var blueBike = new Mount ({
// 	name: 'Blue Bike',
// 	spellId: 1,
// 	creatureId: 1872364,
// 	itemId: 13489257,
// 	qualityId: 9,
// 	icon: 'http://www.bcbsnc.com/assets/campaigns/public/gonc/images/9234-bike.jpg',
// 	isGround: true,
// 	isFlying: false,
// 	isAquatic: false,
// 	isJumping: true,  // blizzard api ends here
// 	foundAt: 'The neighborhood junkyard',
// 	obtainedHow: 'Stole that shit',
// 	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
// });

// var blueBike = new Mount ({
// 	name: 'Blue Bike',
// 	spellId: 1,
// 	creatureId: 1872364,
// 	itemId: 13489257,
// 	qualityId: 9,
// 	icon: 'http://www.bcbsnc.com/assets/campaigns/public/gonc/images/9234-bike.jpg',
// 	isGround: true,
// 	isFlying: false,
// 	isAquatic: false,
// 	isJumping: true,  // blizzard api ends here
// 	foundAt: 'The neighborhood junkyard',
// 	obtainedHow: 'Stole that shit',
// 	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
// });

// var blueBike = new Mount ({
// 	name: 'Blue Bike',
// 	spellId: 1,
// 	creatureId: 1872364,
// 	itemId: 13489257,
// 	qualityId: 9,
// 	icon: 'http://www.bcbsnc.com/assets/campaigns/public/gonc/images/9234-bike.jpg',
// 	isGround: true,
// 	isFlying: false,
// 	isAquatic: false,
// 	isJumping: true,  // blizzard api ends here
// 	foundAt: 'The neighborhood junkyard',
// 	obtainedHow: 'Stole that shit',
// 	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
// });

// var blueBike = new Mount ({
// 	name: 'Blue Bike',
// 	spellId: 1,
// 	creatureId: 1872364,
// 	itemId: 13489257,
// 	qualityId: 9,
// 	icon: 'http://www.bcbsnc.com/assets/campaigns/public/gonc/images/9234-bike.jpg',
// 	isGround: true,
// 	isFlying: false,
// 	isAquatic: false,
// 	isJumping: true,  // blizzard api ends here
// 	foundAt: 'The neighborhood junkyard',
// 	obtainedHow: 'Stole that shit',
// 	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
// });

blueBike.save(function(err) {
  if (err) console.log(err);
  console.log('Blue Bike created');
});

tRex.save(function(err) {
  if (err) console.log(err);
  console.log('T-Rex created');
});

giantSnake.save(function(err) {
  if (err) console.log(err);
  console.log('Giant Snake created');
});

giantCock.save(function(err) {
  if (err) console.log(err);
  console.log('Giant Cock created');
});