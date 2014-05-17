var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var rocker 	   = require('./app/serv.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var my = new rocker();
var port = process.env.PORT || 1850; 		// set our port

var router = express.Router(); 			

router.get('/', function(req, res) {
	res.send('hooray! welcome to our api!');	
});

router.get('/profile', function(req, res) {
	res.send('hooray! to our api!');	
});

app.use('/', router);



app.listen(port);
console.log('Magic happens on port ' + port);

console.log(my); // funguje

