// Include React
import React from "react";
import {Link} from 'react-router-dom';

class RestMain extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                <h1><Link to ="/addplate"> Add New Plate </Link> </h1>
       
                </div>
                <div className="col-md-4">
                <h1><Link to ="/pendingorders"> View Pending Orders </Link> </h1>
    
                </div>
                <div className="col-md-4">
                <h1><Link to ="/completedorders"> See Completed </Link> </h1>
          
                </div>
            </div>
        )
    }

}

export default RestMain;