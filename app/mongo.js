var Twit = require('twit');
 
var T = new Twit({
		consumer_key: 'NOrVFOrKaGpOsD1LHjlDmD9lA',
		consumer_secret: '8Lg3hdsmIbEn9Q1fLTiWbCqHD7vp2OSc21mvTGElnudCr5jM7p',
		access_token: '49683260-3QMRZMbL2dwlgt2DgC6G5cX8JIw2ZDiEZrl8oFLZN',
		access_token_secret: 'WOaplOfNUT4TAJk5bPV0MrTTPm9Z5m5PRUTpYM7MwHvxL'
});

// plne funktcni
var stream = T.stream('statuses/user_timeline', { screen_name: 'Leaker_PRG'})

stream.on('tweet', function (tweet) {
	console.log(tweet);

	var mongo = require('mongodb');

	var MongoClient = require('mongodb').MongoClient, format = require('util').format;

	MongoClient.connect('mongodb://127.0.0.1:27017/tweets', function(err, db) {
			if(err) throw err;

			var collection = db.collection('test_irt');
			collection.insert(tweet , function(err, result) {
					console.log(tweet);
			});
		db.close();  
	});

});	