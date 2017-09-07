var axios = require("axios");
var bcrypt = require("bcryptjs");

var helpers = {

    logout: function () {
        return axios.get('/logout').then((response)=>{
            console.log("Logout Completed in helpers");
        })
        return (response);
    },

    loginuser: function (logininput) {
        console.log("Logininput " + JSON.stringify(logininput));
       return axios.put('/api/login', { logininput }).then(function (response) {
            console.log("Ran Helpers:/api/login");
            console.log(response);
            return (response);
        })
    },

    runRetrieve: function () {
        console.log("Running testRetrieve");
        axios.get('/api/testRetrieve').then(function (results) {
            console.log("Ran testretrieve logging results below: ");
            console.log(results);
            return (results);
        });
    },

    guestupdate: function () {
        console.log("Running testRetrieve");
        var testid = '1';
        axios.put('/api/updateguest',
            {
                id: testid,
                first_name: 'James'
            })
            .then(function (results) {
                console.log("Ran api/updateguest: ");
                console.log(results);
                return (results);
            });
    },

    allguestlist: function () {
        axios.get('/api/admin').then(function (results) {
            console.log(results);
            return (results);
        })
    },

    restaurantlist: function () {
        return axios.get('api/restaurants').then(function (results) {
            console.log(results);
            return (results);
        })
    },

    addnewuser: function (newuser) {


        axios
            .post('/api/newuser',
            {
                first_name: newuser.FirstName,
                last_name: newuser.LastName,
                email: newuser.Email,
                username: newuser.Email,
                address: newuser.Address,
                phone: newuser.Phone,
                password: newuser.Password,
                user_role: newuser.Role,
                restID: newuser.RestID

            })
            .then(results => {
                console.log("completed post /api/newuser");
                return (results);
            });
    },

    pendingorders: function () {
        return axios.get('/api/pendingorders').then(function (results) {
            console.log("Ran Helpers:pendingorders");
            console.log(results);
            return (results);
        })
    },

    purchaseoptions: function () {
        return axios.get('/api/purchaseoptions').then(function (results) {
            console.log("Ran Helpers:purchaseoptions");
            console.log(results);
            return (results);
        })
    },

    guestpurchases: function () {
        return axios.get('/api/purchasesummary').then(function (results) {
            console.log("Ran Helpers:purchasesummary");
            console.log(results);
            return (results);
        })
    },


    purchaseplate: function (id, restid, priorquantity, quantity) {
        // var priorquantity="100";
        console.log("ID is: " + id);
        console.log("RestID is: " + restid);
        console.log("Quantity is: " + quantity);
        console.log("Prior Quantity is: " + priorquantity);
        return axios.put('/api/purchaseplates', {
            quantityordered: quantity,
            restID: restid,
            id: id,
            priorquantity: priorquantity
        }).then(function (results) {
            console.log("Ran Helpers:purchaseoptions");
            console.log(results);
            return (results);
        })
    },

    purchaseorder: function (id, totalcost) {
        console.log("ID is: " + id);
        return axios.put('/api/purchaseorder', {
            guestId:id,
            paid:true
        }).then(function (results) {
            console.log("Ran Helpers:purchaseorder");
            console.log(results);
            return (results);
        })
    
    },

    completeplate: function (id) {
        console.log("ID is: " + id);

        return axios.put('/api/completeplate', {
            id: id
           
        }).then(function (results) {
            console.log("Ran Helpers:completeplate");
            console.log(results);
            return (results);
        })
    },

    addplate: function (platedetails) {

        axios
            .post('/api/addplate',
            {

                PlateName: platedetails.PlateName,
                Description: platedetails.Description,
                Protein: platedetails.Protein,
                Side1: platedetails.Side1,
                Side2: platedetails.Side2,
                Side3: platedetails.Side3,
                Price: platedetails.Price,
                Quantity: platedetails.Quantity,
                PrepTime: platedetails.PrepTime,
                DelayTime: platedetails.DelayTime,
                CreatedBy: platedetails.CreatedBy,

            })
            .then(function (results) {
                console.log("completed post /api/addplate");
                var testtempreturn = "OK";
                console.log(results);
                console.log(testtempreturn);
                return (testtempreturn);
            });
    },

    addrestaurant: function (restaurantdetails) {
        return axios
            .post('/api/addrestaurant',
            {
                RestaurantName: restaurantdetails.RestaurantName,
                Address: restaurantdetails.Address,
                Hours: restaurantdetails.Hours,
                Phone: restaurantdetails.Phone,
                Email: restaurantdetails.Email,
            })
            .then(function (results) {
                console.log("completed post /api/addrestaurant");
            });
    },
};
module.exports = helpers;