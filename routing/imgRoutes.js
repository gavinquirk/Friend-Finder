var path = require("path");

module.exports = function(app) {

  app.get("/img/logo", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/img/friend-finder-logo-1.png"));
  });
};
