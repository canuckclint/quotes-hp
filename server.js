// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
//app.use("/", routes);

//var db ="mongodb://quotes-hp:quoteshp@cluster0-7eb65.mongodb.net/test?retryWrites=true"
//var db = "mongodb://quotes-hp:quoteshp@cluster0-shard-00-00-7eb65.mongodb.net:27017,cluster0-shard-00-01-7eb65.mongodb.net:27017,cluster0-shard-00-02-7eb65.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
//var db = "mongodb://heroku_9chsvb1w:am9kbli27rff74c5hv558na4vj@ds127842.mlab.com:27842/heroku_9chsvb1w" || "mongodb://localhost/quotesApp";

var db="mongodb+srv://quotes-hp:quotes-hp01@cluster0.icoft.mongodb.net/heroku_4wrjr2ks_2?retryWrites=true&w=majority"

var auth = require('basic-auth');


var authFunc = function(req, res, next){
  var user = auth(req);
	//console.log("In authFunc .............");
  if(user && user.pass == 'zamp'){ // Here you need some logic to validate authentication
    next();
	  //console.log('auth true:' + user.pass);
  } else {
	  //console.log('auth false');
    res.set({
      'WWW-Authenticate': 'Basic realm="simple-admin"'
    }).send(401);
  }
};



app.use("/", authFunc);
app.get("/", authFunc, function (req, res) {
	//console.log('get auth yes'); //authenticated
});
 
	app.use('/', routes);


// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose db connection is successful");
  }
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
