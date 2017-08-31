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
      <div className="row">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Last Call</a>
            </div>  
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to ='/aboutus'>About Us</Link></li>
              <li>Page 2</li>
            </ul>            
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Dashboard Actions
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to='/newplates'>Add New Plate</Link></li>
                  <li><a href="#">View Plates</a></li>
                  <li><a href="#">Something Else Here</a></li>
                </ul>
              </li>                             
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
