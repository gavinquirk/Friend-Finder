
var friendData = require("../app/data/friends.js");

// Routes
module.exports = function (app) {

  // Display api data through this route
  app.get("/api/friends", function (req, res) {

    res.json(friendData);
    
  })

  // Push new user data into friend data array, send match data
  app.post("/api/friends", function (req, res) {

    friendData.push(req.body);
    var newUserScores = req.body.scores

    res.send(friendData[0])




  })

}


