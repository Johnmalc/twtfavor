// You'll need a single TembooSession object in your code, eg:
var tsession = require("/var/www/html/twtfavor/projekt/node_modules/temboo/core/temboosession");
var Twitter = require("/var/www/html/twtfavor/projekt/node_modules/temboo/Library/Twitter/OAuth");
var session = new tsession.TembooSession("f789gh", "myFirstApp", "cd9d754cc7124435bd72cf15c09ea48e");
var get_Call;
var url;
var get_OAuthSecret;

var initializeOAuthChoreo = new Twitter.InitializeOAuth(session);
var finalizeOAuthChoreo = new Twitter.FinalizeOAuth(session);

var initializeOAuthInputs = initializeOAuthChoreo.newInputSet();
var finalizeOAuthInputs = finalizeOAuthChoreo.newInputSet();

initializeOAuthInputs.setCredential("Twitter");
finalizeOAuthInputs.setCredential("Twitter");

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
		finalizeOAuthInputs.set_ConsumerKey("xQDbhFV73y5lmub8SLex4QqIChF76sWH0cHgA09U8");
		finalizeOAuthInputs.set_ConsumerSecret("zVG2ZFde5ebHBGu0Ix7s8A");

		finalizeOAuthChoreo.execute(
		    finalizeOAuthInputs,
		    function(results){
		    	console.log(results.get_ScreenName());
		    },
		    function(error){
		    	console.log(error.type); 
		    	console.log(error.message);
		    }
		);
    },
    function(error){
    	//console.log(error.type); 
    	//console.log(error.message);
    }
);
