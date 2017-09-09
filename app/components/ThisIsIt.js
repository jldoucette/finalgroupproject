// Include React
import React from "react";
import { Link } from 'react-router-dom'


class ThisIsIt extends React.Component {
  constructor () {
    super();
  }



 
  render() {
    var incrtext={fontSize: '400%', color: 'white'};
    var highlight={fontSize: '500%', color: 'red'};
  
    return (
      <div className="row">
        <h2 style={incrtext}> One thing we all agreed on.......... </h2>
       <br />
       <h1 style={incrtext}>Stephen Kings It is a scary film but <span style={highlight}><strong><i>this</i></strong></span> is a NIGHMARE!</h1> <br />
         <br />   
        <button><Link to='/login'> Login </Link></button>
        <button><Link to='/aboutus'> Return to Main Menu</Link></button>
      </div>
    )
  }
}

export default ThisIsIt;
