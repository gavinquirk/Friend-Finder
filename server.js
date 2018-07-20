// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path')

// Express Instance
var app = express();

// Port
var PORT = process.env.PORT || 3000;

// Set up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
require("./routing/apiRoutes")(app)
require("./routing/htmlRoutes")(app)
require("./routing/imgRoutes")(app)

// Access to public directory
app.use(express.static(__dirname + '/public'));

// Listener
app.listen(PORT, function() {
  console.log("App listening on: http://localhost:" + PORT)
});
