/*
var get_Call;
var get_OAuthSecret;
var url;
 
// You'll need a single TembooSession object in your code, eg:
var tsession = require("/var/www/html/twtfavor/projekt/node_modules/temboo/core/temboosession");
var session = new tsession.TembooSession("f789gh", "myFirstApp", "cd9d754cc7124435bd72cf15c09ea48e");
var Twitter = require("/var/www/html/twtfavor/projekt/node_modules/temboo/Library/Twitter/OAuth");

var initializeOAuthChoreo = new Twitter.InitializeOAuth(session);
var finalizeOAuthChoreo = new Twitter.FinalizeOAuth(session);
var initializeOAuthInputs = initializeOAuthChoreo.newInputSet();
var finalizeOAuthInputs = finalizeOAuthChoreo.newInputSet();
initializeOAuthInputs.setCredential("Twitter");
finalizeOAuthInputs.setCredential("Twitter");

// Set inputs
initializeOAuthInputs.set_ForwardingURL("http:///127.0.0.1/twtfavor/projekt/app/profile/profile.html");
// Run the choreo, specifying success and error callback handlers
initializeOAuthChoreo.execute(
    initializeOAuthInputs,
    function(results){
        get_Call = results.get_CallbackID();
        get_OAuthSecret = results.get_OAuthTokenSecret();
        url = results.get_AuthorizationURL();
        console.log(" ++++++++++++++++++");
        console.log(results.get_CallbackID());
        console.log(results.get_OAuthTokenSecret());
        console.log(results.get_AuthorizationURL());
        finalizeOAuthInputs.set_CallbackID(get_Call);
        finalizeOAuthInputs.set_OAuthTokenSecret(get_OAuthSecret);
        finalizeOAuthInputs.set_ConsumerKey("zVG2ZFde5ebHBGu0Ix7s8A");
        finalizeOAuthInputs.set_ConsumerSecret("xQDbhFV73y5lmub8SLex4QqIChF76sWH0cHgA09U8");

        finalizeOAuthChoreo.execute(
            finalizeOAuthInputs,
            function(results){
                console.log("-----------------");
                console.log(results.get_AccessTokenSecret());
                console.log(results.get_AccessToken());
            },
            function(error){
                //console.log(error.type); 
                //console.log(error.message);
            }
        );
    },
    function(error){
        //console.log(error.type); 
        //console.log(error.message);
    }
);
*/
var mongo = require('mongodb');
var Twit = require('twit');
var T = new Twit({
    consumer_key: "zVG2ZFde5ebHBGu0Ix7s8A",
    consumer_secret: "xQDbhFV73y5lmub8SLex4QqIChF76sWH0cHgA09U8",
    access_token: "49683260-OPvS72ypBtmvuiSFNMk0fKD9a7rJQQOHp2eMuF5Ux", // esults.get_AccessToken() // 49683260-OPvS72ypBtmvuiSFNMk0fKD9a7rJQQOHp2eMuF5Ux
    access_token_secret: "uXaPifAE5yEoBuqBwSMPq95aJ20swQgsOBndSPQXb9t0l" // uXaPifAE5yEoBuqBwSMPq95aJ20swQgsOBndSPQXb9t0l // fesults.get_AccessTokenSecret()
});

T.get('statuses/user_timeline', {screen_name: "Leaker_PRG"}, function(err, data, response) {
  console.log(data);

  var MongoClient = require('mongodb').MongoClient, format = require('util').format;

  MongoClient.connect('mongodb://127.0.0.1:27017/tweets', function(err, db) {
      if(err) throw err;
      

      var collection = db.collection('test_irt');
      /*
      collection.insert(data, function(err, result) {
          console.log(data);
      });
*/
    db.close();  
  })

});





