// Include React
// var React = require("react")
// var Link = require("react-router").Link;
import React from "react";
import ReactDOM from "react-dom";

// var Info = createReactClass({
//   render: function() {
//     return (
//       <div className="row">
//         <h1>Info </h1>
//       </div>
//     );
//   }
// });


class Info extends React.Component {
  constructor () {
    super();
  }

  //Render
  render() {
    return (
      <div className="row">
        <h1> Info </h1>
      </div>
    );
  }
}



// Export the component back for use in other files
export default Info;