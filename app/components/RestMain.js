// Include React
import React from "react";
import {Link} from 'react-router-dom';

class RestMain extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h1> Add New Plate </h1>
                </div>
                <div className="col-md-4">
                    <h1> View Pending </h1>
                </div>
                <div className="col-md-4">
                    <h1> See Completed </h1>
                </div>
            </div>
        )
    }

}

export default RestMain;