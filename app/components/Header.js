// Include React
import React from "react";
import { Link } from 'react-router-dom'

// Create the Main component
class Header extends React.Component{

  constructor () {
    super();
  }

  // Here we render the component
  render() {
    return (
      <div className="col-md-12">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Last Call</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to ='/info'>About Us</Link></li>
              <li>Page 2</li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='newuser'><span className="glyphicon glyphicon-user"></span> Sign Up </Link></li>
              <li><Link to='login'><span className="glyphicon glyphicon-log-in"></span> Login </Link></li>
            </ul>
          </div>
        </nav>        
      </div>
    );
  };
};

<li><Link to='/login'>Login</Link></li>

// Export the component back for use in other files
export default Header;
