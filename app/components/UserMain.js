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
    fontFamily: "Bree Serif",
    opacity: "0.9"
}

class UserMain extends React.Component {

    render() {
        return (
            <div className="row">
                    <div className="col-md-4">
                        <div className="container" style={imgStyle}>
                            <div className="purchasePlates" style={divStyle}> <Link to ="/purchaseplates"> Today's Menu </Link> </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="container" style={imgStyle}>
                            <div className="purchaseHist" style={divStyle}> <Link to ="/purchasehistory"> Order History </Link> </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="container" style={imgStyle}>
                            <div className="purchaseSumm" style={divStyle}> <Link to ="/purchasesummary"> Cart Checkout </Link> </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default UserMain;

// <div className="row">

//     <div className="col-md-4">
//         <div className="container" style={plateStyle}>
//             <div className="newPlate" style={divStyle}> <Link to ="/addplate"> Add New Plate </Link> </div>
//             {/* <img src="https://t4.ftcdn.net/jpg/00/59/69/95/240_F_59699563_A0mCz2LkgfPHrj0PbAPd0FaccfOrPELQ.jpg"/>  */}
//         </div>  
//     </div>
//     <div className="col-md-4">
//         <div className="containter" style={plateStyle}>
//             <div className="pendingOrders"><Link to ="/pendingorders"> View Pending Orders </Link> </div>
//         </div>
//     </div>
//     <div className="col-md-4">
//         <div className="container" style={plateStyle}>
//             <div className="completedOrders"><Link to ="/completedorders"> See Completed </Link> </div>
//         </div>
//     </div>

// </div>