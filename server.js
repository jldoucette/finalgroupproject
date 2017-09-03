// Dependicies
let express = require("express");
let bodyParser = require("body-parser");
const path = require('path');
let logger = require("morgan");
let bcrypt = require("bcryptjs");
const saltRounds = 10;
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
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/newuser", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/testing", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//Express Routes 
var username = 'jd@jd.com';
var password = 'asdf';
app.get("/api/testRetrieve", function (req, res) {
  console.log("Got to /api/testRetrieve");
  db.guests.findOne({
    where:
    {
      username: username
    }
  })
    .then(function (data) {
      console.log(data);
      res.json(data);
    });
});

app.post("/api/newuser", function (req, res) {
  console.log("Request Body is: ");
  console.log(req.body);
  var AlteredPassword = req.body.password;
  console.log("Altered Password is: " + AlteredPassword);
  bcrypt.hash(AlteredPassword, saltRounds, function (err, hash) { //bcrypt encrypts the password
    console.log("hash is: " + hash);
    db.guests.create({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: hash,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.username,
      user_role: req.body.user_role,
      restID: req.body.restID


    }).then(function (data) {
      res.json(data);
    })
  })
});

app.post("/api/addplate", function (req, res) {
  var postdate = new Date();
  var createDate = postdate.getFullYear() + "-" + (1 + postdate.getMonth()) + "-" + postdate.getDate();
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Create Date: " + createDate);
  db.plates.create({
    plate_name: req.body.plate_name,
    protein: req.body.protein,
    side1: req.body.side1,
    side2: req.body.side2,
    side3: req.body.side3,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
    createdby: req.body.createdby,
    createdate: createDate,
    preptime: req.body.preptime,
    delaytime: req.body.delaytime,
    restaurantId: userRestaurant
    // GuestID:userIdentity
  }).then(function (data) {
    res.json(data);
  });
});

app.put("/api/purchaseoptions/:id", function (req, res) {
  var newQuantity = parseInt(req.body.priorquantity) - parseInt(req.body.quantityordered);
  if (newQuantity >= 0) {
    db.purchases.create({
      guestId: userIdentity,
      quantity: req.body.quantityordered,
      restaurantId: req.body.restID,
      plateId: req.params.id,
      createdate: todaysdate,
      paid: false,
      completed: false
    }), db.plates.update({
      quantity: newQuantity
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (data) {
        res.json(data);
      });
  }
  else {
    console.log("******NOT ENOUGH LEFT*********");
    res.redirect("/notenoughtosell");
  }
});

app.put("/api/purchaseplates/:id", function (req, res) {
  db.purchases.update({
    paid: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.JSON({
        id: req.params.id,
        paid: true
      });
    });
});

app.delete("/api/cancelplate/:id", function (req, res) {
  var reservedquantity = req.body.reservedquantity;
  var precxlremainqty = req.body.precxlremainqty;
  var returnedquantity = parseInt(reservedquantity) + parseInt(precxlremainqty);
  db.purchases.destroy(
    {
      where: {
        id: req.params.id
      }
    })
    , db.plates.update({
      quantity: returnedquantity
    }, {
        where: {
          id: req.body.sourceplateID
        }
      }).then(function (data) {
        res.json(data);
      });
});

app.put("/api/completeplate/:id", function (req, res) {
  db.purchases.update({
    completed: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
});

app.post("/api/addrestaurant", function (req, res) {
  db.restaurants.create({
    restname: req.body.restname,
    address: req.body.address,
    hours: req.body.hours,
    phone: req.body.phone,
    email: req.body.email,
    createdBy: siteUsername
  }).then(function (data) {
    res.json(data);
  });
});

app.put("/api/updateguest", function (req, res) {
  db.guests.update({
    first_name: req.body.first_name,
  }, {
      where: {
        id: req.body.id,
      }
    }).then(function (data) {
      res.json(data);
    });
});

//Express Get Routes
app.get("/api/plates", function (req, res) {
  db.plates.findAll({
    order: ['plate_name'],
    where: { quantity: { $gt: 0 } }
  }).then(function (data) {
    res.json(data);
  });
});

app.get('/api/pendingorders', function (req, res) {
  db.purchases.findAll({
    order: [['createdAt', 'ASC']],
    where: {
      'restaurantId': userRestaurant,
      paid: true,
      completed: false
    },
    include: [db.guests, db.plates]
  }).then(function (data) {
    res.json(data);
  });

});

app.get('/api/purchaseoptions', function (req, res) {

  db.plates.findAll({
    //  order: [['restID', 'ASC']],
    where: {
      'quantity': { $gte: 1 }
      // createdate: todaysdate
    },
    include: [db.restaurants]

  }).then(function (data) {
    res.json(data);
  });
});

  app.get('/api/purchasesummary', function (req, res) {
      db.purchases.findAll({
        order: [['restaurantId', 'ASC']],
        where: {
          guestId: userIdentity,
          createdate: todaysdate,
          // paid: false,
          'quantity': { $gte: 1 }
        },
        include: [db.plates, db.restaurants]

      }).then(function (data) {
        res.json(data);
      });
    });

      app.get("/api/restaurants", function (req, res) {
          db.restaurants.findAll({
            order: ['restname']
          }).then(function (data) {
            res.json(data);
          });
        });

          app.get('/api/admin', function (req, res) {
              db.guests.findAll({
                order: [
                  ['user_role', 'ASC'],
                  ["last_name", "ASC"]
                ]
              }).then(function (data) {
                res.json(data);
          });
        });

          db.sequelize.sync().then(function () {
            app.listen(PORT, function () {
              console.log("App listening on PORT " + PORT);
            });
          });

