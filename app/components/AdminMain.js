// Include React
import React from "react";
import {Link} from 'react-router-dom';

class AdminMain extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                <h1><Link to ="/restaurants"> List Restaurants </Link> </h1>
                </div>
                <div className="col-md-4">
                <h1><Link to ="/addrestaurant"> Add Restaurant </Link> </h1>
                </div>
                <div className="col-md-4">
                <h1><Link to ="/edituser"> Edit User </Link> </h1>
                </div>
            </div>
        )
    }

}

export default AdminMain;