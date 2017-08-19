// Include React
var React = require("react")

var createReactClass = require('create-react-class');
var Link = require("react-router").Link;

var Info = createReactClass({
  
  render: function() {

    return (

      <div className="row">
        <h1>Info </h1>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Info;
