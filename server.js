// Dependicies
let express = require("express");
let bodyParser = require("body-parser");
const path = require('path');
let logger = require("morgan");

//Express
let app = express();

//Port
let PORT = process.env.PORT || 3000;

//Models for DB
var db = require("./models");
// var db = require("./models/index.js");
// var db = require("./models/plates.js");

//Morgan for Logging
// app.use(logger("dev"));

app.use(express.static("public"));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"))
});

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

