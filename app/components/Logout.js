// Include React
import React from "react";
import { Link, Redirect } from 'react-router-dom'
import helpers from "../utils/helpers.js";
import Login from "./LogIn.js";

class Logout extends React.Component {
  constructor () {
    super();
  }

  startLogout() {
      helpers.logout().then(()=> {
        console.log("Completed logout in Logout component");
      })
  }

  //Render
  render() {
      this.startLogout();
    return (
      <div className="row">
        <h1> You Have Successfully Logged Out </h1>
        {/* <button className="btn btn-default btn-large" onClick={this.startLogout} type="submit">Logout</button> */}
            
        <button><Link to='/login'> Login </Link></button>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Logout;