// You'll need a single TembooSession object in your code, eg:
var tsession = require("/var/www/html/twtfavor/projekt/node_modules/temboo/core/temboosession");
var session = new tsession.TembooSession("f789gh", "myFirstApp", "cd9d754cc7124435bd72cf15c09ea48e");

var Twitter = require("/var/www/html/twtfavor/projekt/node_modules/temboo/Library/Twitter/OAuth");

var get_Call;
var get_OAuthSecret;
var url;

var initializeOAuthChoreo = new Twitter.InitializeOAuth(session);
var finalizeOAuthChoreo = new Twitter.FinalizeOAuth(session);

// Instantiate and populate the input set for the choreo
var initializeOAuthInputs = initializeOAuthChoreo.newInputSet();

// Instantiate and populate the input set for the choreo
var finalizeOAuthInputs = finalizeOAuthChoreo.newInputSet();

// Set credential to use for execution
initializeOAuthInputs.setCredential("Twitter");
// Set credential to use for execution
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
    	console.log(" callback AccessTokenSecret OAuthSecret");
    	console.log(results.get_CallbackID());
    	console.log(results.get_AuthorizationURL());
    	console.log(results.get_OAuthTokenSecret());
    },
    function(error){
    	console.log(error.type); 
    	console.log(error.message);
    }
);

// Set inputs
finalizeOAuthInputs.set_CallbackID(get_Call);
finalizeOAuthInputs.set_OAuthTokenSecret(get_OAuthSecret);

// Run the choreo, specifying success and error callback handlers
finalizeOAuthChoreo.execute(
    finalizeOAuthInputs,
    function(results){
    	console.log("?___________________________");
    	console.log(results.get_AccessTokenSecret());
    },
    function(error){
    	console.log(error.type); 
    	console.log(error.message);
    }
);
