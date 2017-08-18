// Dependicies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

//Express
var app = express();

//Models for DB

// var db = require("./models/index.js");
// var db = require("./models/plates.js");

//Port
var PORT = process.env.PORT || 3000;

//Morgan for Logging
app.use(logger("dev"));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//
app.use(express.static("public"));

// Starting our express server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

//   db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
