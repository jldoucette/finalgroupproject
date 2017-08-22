// Include React

import React from "react";
import ReactDOM from "react-dom";

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