var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/todoapp';
var dburl = 'mongodb://sashas:sashas@ds017185.mlab.com:17185/mytasklist';//'mongodb://localhost:27017/todoapp';
// connection configuration
var mongo = process.env.VCAP_SERVICES;
var port = process.env.PORT || 3030;
var conn_str = "";
// if bluemix service is defined
if (mongo) {
  var env = JSON.parse(mongo);
  if (env["mongodb"]) {
// get predefined credentials
// in order to get url information
    mongo = env["mongodb"][0]["credentials"];
    if (mongo.url) {
      conn_str = mongo.url;
    } else {
      console.log("No mongo found");
    }
// if no mongodb service bound to app
// set default local server path
  } else {
    conn_str = "mongodb://localhost:27017";
    //conn_str = 'mongodb://sashas:sashas@ds017185.mlab.com:17185/mytasklist';
  }
// if no services found
// use local server path
} else {
  conn_str = "mongodb://localhost:27017";
//    conn_str = 'mongodb://sashas:sashas@ds017185.mlab.com:17185/mytasklist';
}
//mongoose.connect(conn_str);


dburl = conn_str;
mongoose.connect(dburl);


// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});


// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('App termination (SIGINT)', function() {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('App termination (SIGTERM)', function() {
    process.exit(0);
  });
});


// BRING IN YOUR SCHEMAS & MODELS
require('./todoapp.model');