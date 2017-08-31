var axios = require("axios");
var bcrypt = require("bcryptjs");

var helpers = {

    runRetrieve: function() {
        console.log("Running testRetrieve");
        axios.get('/api/testRetrieve').then(function(results){
            console.log("Ran testretrieve logging results below: ");
            console.log(results);
            return(results);
        });
    },

    guestupdate: function() {
        console.log("Running testRetrieve");
        var testid='1';
        axios.put('/api/updateguest',
        {id:testid,
        first_name: 'James'})
        .then(function(results){
            console.log("Ran api/updateguest: ");
            console.log(results);
            return(results);
        });
    }
};


module.exports = helpers;