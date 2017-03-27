var mongoose = require('mongoose');
var Mount = require("./models/mountModel.js");
var User = require("./models/userModel.js");

mongoose.promise = global.Promise;


// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/project-2');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

// clear before re seed
Mount.remove({}, function(err) {
    console.log(err);
});

var blueBike = new Mount ({
	name: Blue Bike,
	spellId: 1,
	creatureId: 1872364,
	itemId: 13489257,
	qualityId: 9,
	icon: String,     // COME BACK TO THIS ~~!!@$@!$
	isGround: true,
	isFlying: false,
	isAquatic: false,
	isJumping: true,  // blizzard api ends here
	dateObtained: Date,
	foundAt: 'The neighborhood junkyard',
	obtainedHow: 'Stole that shit',  // found/purchased/stole etc.
	description: 'A rusty old blue bike that a I found at the junkyard, surprisingly both tires had air. Really fun riding around and jumping curbs'
});

blueBike.save(function(err) {
  if (err) console.log(err);
  console.log('Blue Bike created');
});