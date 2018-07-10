var path = require('path')
var friendData = require("../app/data/friends.js");

// Routes
module.exports = function (app) {

  // Send data to api array
  app.get("/api/friends", function (req, res) {

    res.json(friendData);
    
  })

  // Push new user data into friend data array, send match data
  app.post("/api/friends", function (req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body
    var userScores = userData.scores

    for (var i = 0; i < friendData.length; i++) {
      scoreDifference = 0;

      // Find Difference between user score and friend score
      for (var j = 0; j < friendData[i].scores[j]; j++)
        scoreDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

      // If calculated difference is less than or equal to current best match difference, change best match to current iteration
      if (scoreDifference <= bestMatch.friendDifference) {
        bestMatch.name = friendData[i].name;
        bestMatch.photo = friendData[i].photo;
        bestMatch.friendDifference = scoreDifference;
      }
    }
    // Push user data to friend array, respond to front-end with best match
    friendData.push(userData);
    res.json(bestMatch);
  })

}


