var mongo = require('mongodb');
var Twit = require('twit')
var credentials = require('./tweets.js');
 
var T = new Twit({
    consumer_key: "zVG2ZFde5ebHBGu0Ix7s8A",
    consumer_secret: "xQDbhFV73y5lmub8SLex4QqIChF76sWH0cHgA09U8",
    access_token: "49683260-OPvS72ypBtmvuiSFNMk0fKD9a7rJQQOHp2eMuF5Ux",
    access_token_secret: "uXaPifAE5yEoBuqBwSMPq95aJ20swQgsOBndSPQXb9t0l"
});

var stream = T.stream('statuses/filter', { track: ['bananas', 'oranges', 'strawberries'] })
var tw;
stream.on('tweet', function (tweet) {
      var tw = tweet;
}) 
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://localhost:27017/tweets', function (err, db) {
    if (err) throw err;

    var collection = db.collection('test_insert');
    collection.insert({id_:tw},function(err, docs) {
            console.log("successfully connected to the database");

   });

    // Locate all the entries using find
   // collection.find().toArray(function(err, results) {
   //     console.dir(results);
        // Let's close the db
        
 //   });
    db.close();
});
