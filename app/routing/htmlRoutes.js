// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
