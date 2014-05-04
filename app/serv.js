var get_Call;
var get_OAuthSecret;
var url;

var circle = require('./tweets_save.js');
var tsession = require("/var/www/html/twtfavor/projekt/node_modules/temboo/core/temboosession");
var Twitter = require("/var/www/html/twtfavor/projekt/node_modules/temboo/Library/Twitter/OAuth");
var session = new tsession.TembooSession("f789gh", "myFirstApp", "QnrkNogY5qSPNIJVrgXG");

var initializeOAuthChoreo = new Twitter.InitializeOAuth(session);
var finalizeOAuthChoreo = new Twitter.FinalizeOAuth(session);
var initializeOAuthInputs = initializeOAuthChoreo.newInputSet();
var finalizeOAuthInputs = finalizeOAuthChoreo.newInputSet();
initializeOAuthInputs.setCredential("Tw");
finalizeOAuthInputs.setCredential("Tw");


initializeOAuthInputs.set_ForwardingURL("http:///127.0.0.1/twtfavor/projekt/app/profile/profile.html");
var get_AccessTokenSecret; 
var get_AccessToken;
var name;

initializeOAuthChoreo.execute(
    initializeOAuthInputs,
    function(results){
        get_Call = results.get_CallbackID();
        get_OAuthSecret = results.get_OAuthTokenSecret();
        url = results.get_AuthorizationURL();
        console.log(" ");
        console.log(" ");
        //console.log(results.get_CallbackID());
        //console.log(results.get_OAuthTokenSecret());
        console.log(results.get_AuthorizationURL());
        finalizeOAuthInputs.set_CallbackID(get_Call);
        finalizeOAuthInputs.set_OAuthTokenSecret(get_OAuthSecret);
        finalizeOAuthInputs.set_ConsumerKey("NOrVFOrKaGpOsD1LHjlDmD9lA");
        finalizeOAuthInputs.set_ConsumerSecret("8Lg3hdsmIbEn9Q1fLTiWbCqHD7vp2OSc21mvTGElnudCr5jM7p");

        finalizeOAuthChoreo.execute(
            finalizeOAuthInputs,
            function(results){
                name = results.get_ScreenName();
                get_AccessToken = results.get_AccessToken();
                get_AccessTokenSecret = results.get_AccessTokenSecret();
                console.log(" ");
                console.log(" ");
                //console.log(results.get_AccessTokenSecret());
                //console.log(results.get_AccessToken());
                //console.log(results.get_ScreenName());
                circle.saveTweets('get_AccessToken', 'get_AccessTokenSecret', 'name');
                console.log("neco se stane");
            },
            function(error){
                console.log(error.type); 
                console.log(error.message);
            }
        );
    },
    function(error){
        console.log(error.type); 
        console.log(error.message);
    }
);




