// Include React
import React from "react";
import {Link} from 'react-router-dom';

const imgStyle = {
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/00/59/69/95/240_F_59699563_A0mCz2LkgfPHrj0PbAPd0FaccfOrPELQ.jpg")',
    height: "250px",
    width: "auto",
    padding: "0px"
}

const divStyle = {
    fontSize : "25px",
    textAlign: "center",
    backgroundColor: "#333",
    opacity: "0.9",
    fontFamily: "Bree Serif",
}

class AdminMain extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="container" style={imgStyle}>
                        <div className="restaurants" style={divStyle} ><Link to ="/restaurants"> List Restaurants </Link> </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container" style={imgStyle}>
                        <div className="addrest" style={divStyle} > <Link to ="/addrestaurant"> Add Restaurant </Link> </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container" style={imgStyle}>
                        <div className="edituser" style={divStyle} > <Link to ="/edituser"> Edit User </Link> </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AdminMain;

