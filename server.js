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


//Variables
var userLoggedIn = false;
var userIdentity;
var userRole;
var today;
var todaysdate;
var siteUsername;
var userFirstName;
var userLastName;
var userAddress;
var usereMail;
var userPhone;
var userRestaurant;
var newQuantity;

// Any non API GET routes will be directed to our React App and handled by React Router
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname, "/public/index.html");
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

app.get("/addplate", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/addrestaurant", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/restaurants", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/purchaseplates", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});



//Express Routes 

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

// Begin Login Paste

app.put("/api/login", function (req, res) {
  console.log("^^^^^^^^^^^^^^^^Got to Login Put");
    console.log(req.body);
  today = new Date();
  todaysdate = today.getFullYear() + "-" + (1 + today.getMonth()) + "-" + today.getDate();
  console.log("++++++++++++++++++++++++++Todays Date is " + todaysdate);
  console.log("req.body.Username is "+req.body.logininput.Username);
  db.guests.findOne({
    where:
    {
      username: req.body.logininput.Username
    }
  }).then(project => {
    // }).then(function(data){

    if (project != null) {
      //project is the body of the object that is returned if the user exists
      bcrypt.compare(req.body.logininput.Password, project.dataValues.password, function (err, matches) {
        if (err) {
          console.log('Error while checking password');
        }
        else if (matches) {
          console.log('The password matches!');
          siteUsername = req.body.logininput.Username;
          db.guests.findOne({
            where: {
              username: siteUsername
            }
          }).then(function (data) {
            console.log("Password was matched");
            console.log("User"+siteUsername);
            console.log(data.id);
            console.log(data.first_name);
            console.log(data.last_name);
            console.log(data.address);
            console.log(data.email);
            console.log(data.phone);
            console.log(data.restaurantID);
            console.log(data.user_role);
            userLoggedIn = true;
            userIdentity = data.id;
            userFirstName = data.first_name;
            userLastName = data.last_name;
            userAddress = data.address;
            usereMail = data.email;
            userPhone = data.phone;
            userRestaurant = data.restID;
            userRole = data.user_role;
            console.log(userLoggedIn);
            console.log(userIdentity);
            console.log(userFirstName);
            console.log(userLastName);
            console.log(userAddress);
            console.log(usereMail);
            console.log(userPhone);
            console.log(userRestaurant);
            console.log(userRole);

            // if (userRole == "R") {
            //   console.log("User Role was R");
            //   res.redirect("/pendingorders");
            // }
            // if (userRole == "U") {
            //   res.redirect("/purchaseoptions");
            // }
            // if (userRole == "A") {
            //   res.redirect("/admin");
            // }
          });
        }

        else if (!matches) {
          userLoggedIn = false;
          console.log('The password does NOT match!');
        }
      });
    }
    else {
      userLoggedIn = false;
      console.log('The password check failed to match!');
    }
  });
});





// End of Login Paste


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
  console.log("Request Body");
  console.log(req.body);
  var postdate = new Date();
  var createDate = postdate.getFullYear() + "-" + (1 + postdate.getMonth()) + "-" + postdate.getDate();
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Create Date: " + createDate);
  db.plates.create({
    plate_name: req.body.PlateName,
    protein: req.body.Protein,
    side1: req.body.Side1,
    side2: req.body.Side2,
    side3: req.body.Side3,
    price: req.body.Price,
    quantity: req.body.Quantity,
    description: req.body.Description,
    createdby: siteUsername,
    createdate: createDate,
    preptime: req.body.PrepTime,
    delaytime: req.body.DelayTime,
    restaurantId: userRestaurant
    
  }).then(function (data) {
    console.log("Data is:");
    console.log(data);
    res.json(data);
  });
});

app.put("/api/purchaseoptions/:id", function (req, res) {
  newQuantity = parseInt(req.body.priorquantity) - parseInt(req.body.quantityordered);
  
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

// app.put("/api/purchaseplates", function (req, res) {
//   var id=req.params.id;
//   console.log(id);
//   db.purchases.update({
//     paid: true
//   }, {
//       where: {
//         id: req.params.id
//       }
//     }).then(function (data) {
//       res.json({
//         id: req.params.id,
//         paid: true
//       });
//     });
// });

app.put("/api/purchaseplates", function (req, res) {
  console.log(req.body);
  var id=req.body.id;
  var rest=req.body.restID;
  var quant=req.body.quantityordered;
  var priorquant=parseInt(req.body.priorquantity);
  console.log("Passed thru id param is: "+req.body.id);
  console.log("RestID Passed is "+req.body.restID);
  console.log("Quantity Passed is "+req.body.quantityordered);
  console.log("Prior Quantity Passed is "+req.body.priorquantity);
  var newQuantity = parseInt(priorquant) - parseInt(quant);
  console.log("newQuantity is "+ newQuantity);
db.purchases.create({
  guestId: userIdentity,
  quantity: quant,
  restaurantId: rest,
  plateId: id,
  createdate: todaysdate,
  paid: false,
  completed: false
})
, 
db.plates.update({
  quantity: newQuantity
}, {
    where: {
      id: id
    }
  })
  .then(function (data) {
    res.json(data);
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
    restname: req.body.RestaurantName,
    address: req.body.Address,
    hours: req.body.Hours,
    phone: req.body.Phone,
    email: req.body.Email,
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
     order: [['restaurantId', 'ASC']],
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

