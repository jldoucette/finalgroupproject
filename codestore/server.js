// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var stripe = require("stripe")("sk_test_FzfYBj3xtCColPKNW5LuYAvC");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
app.use(express.static(path.join(__dirname, 'public')));


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});


// Create New Characters - takes in JSON input
app.post("/charge", function(req, res) {
  var amount = req.body.amount;
  var token = req.body.token;
  console.log("IT WORKS",token);

  var charge = stripe.charges.create({
    amount: 100000, //where you put the amount you want to charge its in cents
    currency: "usd",
    description: "Example charge",
    source: token,
  }, function(err, charge) {
    // asynchronously called
  });


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
