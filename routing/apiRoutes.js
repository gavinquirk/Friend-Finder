
// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a 
// JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

var friendData = require("../app/data/friends.js");

// Routes
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  })

  app.post("/api/friends", function (req, res) {
    friendData.push(req.body);
    // console.log(friendData)
    var newUserScores = req.body.scores

    function getTotal (array) {
      var sum = 0
      for (var i = 0; i < array.length; i++) {
        sum = sum + parseInt(array[i])
      }
      return sum
    }
    var newUserSum = getTotal(newUserScores)
    
    function findMatch (sum, friendData) {
      for (var i = 0; i < userArray.length; i++) {
        getTotal(friendData)
      }
    }

    // console.log(friendData)


    // console.log(newSum)



  })

}
//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------


//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body-parser middleware
//     if (tableData.length < 5) {

//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];

//     console.log(tableData);
// 