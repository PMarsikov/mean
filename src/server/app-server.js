//require('./api/data/db.js');
//+require('./src/server/db/db-config.js');
require('./db/db-config.js');


var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('../server/routes/index.js');

// Define the port to run on
app.set('port',process.env.PORT || 8000);

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/node_modules', express.static(path.join(__dirname,'../../node_modules')));
app.use('/bower_components', express.static(path.join(__dirname,'../client/bower_components')));
app.use('/src', express.static(path.join(__dirname,'../../src')));
app.use('/pages', express.static(path.join(__dirname,'../../src/client/pages')));

//app.use('/fonts', express.static(__dirname + '/fonts'));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add some routing
//app.use('/api', routes);
app.use('/', routes);

//The 404 Route (ALWAYS Keep this as the last route)
/*
app.get('*', function(req, res){
	res.redirect('/#!/404');
});*/



// Listen for requests
var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Server running on port '+ port);
});
