var Twit = require('twit');
var mongo = require('mongodb');

exports.saveTweets = function(AccessToken, AccessTokenSecret, name) {
    
    var T = new Twit({
        consumer_key: 'NOrVFOrKaGpOsD1LHjlDmD9lA',
        consumer_secret: '8Lg3hdsmIbEn9Q1fLTiWbCqHD7vp2OSc21mvTGElnudCr5jM7p',
        access_token: AccessToken,
        access_token_secret: AccessTokenSecret
    });

    var MongoClient = require('mongodb').MongoClient, format = require('util').format;
    MongoClient.connect('mongodb://127.0.0.1:27017/tweets', function(err, db) {
        if(err) throw err;

        var collection = db.collection('test_irt');
        T.get('statuses/home_timeline',{screen_name:'name', count:5}, function(err, data, response) {
      /*      collection.insert(data, function(err, result) { 
                console.log(data + err);
                });        
*/          console.log("Funkce s mongodb funguje !!!!")
        });
    db.close();
    });     
};
