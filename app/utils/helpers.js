var axios = require("axios");
var bcrypt = require("bcryptjs");

var helpers = {

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

    allguestlist: function() {
        axios.get('/api/admin').then(function (results){
            console.log(results);
            return(results);
        })
    },

    restaurantlist: function() {
        axios.get('api/restaurants').then(function (results){
            console.log(results);
            return(results);
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


purchaseoptions: function() {
    return axios.get('/api/purchaseoptions').then(function (results){
        console.log("Ran Helpers:purchaseoptions");
        console.log(results);
        return(results);
    })
}

};
module.exports = helpers;