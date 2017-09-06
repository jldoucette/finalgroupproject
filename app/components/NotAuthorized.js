// Include React
import React from "react";
import { Link, Redirect } from 'react-router-dom'
import Login from "./LogIn.js";

class NotAuthorized extends React.Component {
  constructor () {
    super();
  }

//   startLogout() {
//       helpers.logout().then(()=> {
//         console.log("Completed logout in Logout component");
//       })
//   }

  //Render
  render() {
    //   this.startLogout();
    return (
      <div className="row">
        <h1> You Are Not Authorized to Perform This Function or View this page. Please Login with appropriate credentials. </h1>
        {/* <button className="btn btn-default btn-large" onClick={this.startLogout} type="submit">Logout</button> */}
            
        <button><Link to='/login'> Login </Link></button>
        <button><Link to='/aboutus'> Return to Main Menu</Link></button>
      </div>
    );
  }
}

// Export the component back for use in other files
export default NotAuthorized;