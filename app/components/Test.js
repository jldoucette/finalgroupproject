// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Test = React.createClass({
  render: function() {
    return (
      <h1>I'm a header!</h1>
    );
  }
});

// Export the component back for use in other files
module.exports = Test;
