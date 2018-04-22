
var friendData = require("../app/data/friends.js");

// Routes
module.exports = function (app) {

  // Send data to api array
  app.get("/api/friends", function (req, res) {

    res.json(friendData);

  })

  // Push new user data into friend data array, send match data
  app.post("/api/friends", function (req, res) {

    var newUser = req.body
    friendData.push(newUser);

    // Determine closest match
    res.send(friendData[0])

  })

}


