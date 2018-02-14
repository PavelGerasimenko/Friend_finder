// Required dependencies
var path = require("path");

var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

//Adding new friend data

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {


//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });
//
//   // ---------------------------------------------------------------------------
//
//
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];
//
//     console.log(tableData);
//   });
// };
