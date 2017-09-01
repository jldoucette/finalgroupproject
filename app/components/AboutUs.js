// Include React
import React from "react";

class AboutUs extends React.Component {
  constructor () {
    super();
  }

  //Render
  render() {
    return (
      <div className="row">
        <h1> Who We Are </h1>
        <h1> Our Mission </h1>
      </div>
    );
  }
}

// Export the component back for use in other files
export default AboutUs;