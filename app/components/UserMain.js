// Include React
import React from "react";
import {Link} from 'react-router-dom';

class UserMain extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h1><Link to ="/plates"> Today's Menu </Link> </h1>
                </div>
                <div className="col-md-4">
                    <h1> Order History </h1>
                </div>
                <div className="col-md-4">
                    <h1> Cart Checkout </h1>
                </div>
            </div>
        )
    }

}

export default UserMain;