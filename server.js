// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var env 	   = process.env.NODE_ENV || 'development';
var expressHbs = require('express3-handlebars');
var cookieParser = require('cookie-parser');
var session      = require('express-session')
var dbUrl;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());
app.set('views', __dirname + '/app/views');
app.engine('hbs', expressHbs({
	extname       :'hbs', 
	layoutsDir    : __dirname + '/app/views/layouts',
	defaultLayout :'default.hbs'
}));
app.use(cookieParser('kjhkjgygyg'));
app.use(session({
    secret : 'grumpy cat'
  , proxy  : true // if you do SSL outside of node.
}))
app.set('view engine', 'hbs');

var port = process.env.PORT || 8080; 		// set our port

app.get('/', function(req, res) {
	res.render('game', {
		one: 'one'
	});
	// res.send('asdf');
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
