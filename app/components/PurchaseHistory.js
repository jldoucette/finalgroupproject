// Include React
import React from "react";
import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";

const divStyle = {
    backgroundColor: "beige"
}


class PurchaseHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchases: []
        };
    }

    getpurchasehistory() {
        helpers.guestpurchasehistory().then((response) => {
            console.log("Got Plates from PurchaseHistory.js Component");
            console.log(response);
            console.log(response.data);
            if (response.data.length > 0) {
                this.setState({
                    purchases: response.data,
                    guestidentity: response.data[0].guestId
                });
                var subtotal = 0;
                var finaltotal = 0;
                for (var i = 0; i < response.data.length; i++) {
                    var itemprice = parseFloat(response.data[i].plate.price);
                    var platequantity = parseInt(response.data[i].quantity);
                    subtotal = subtotal + (itemprice * platequantity);
                    console.log(itemprice);
                    console.log(subtotal);
                }
                finaltotal = subtotal.toFixed(2);
                console.log("Final Total" + finaltotal);
                this.setState({
                    purchasetotal: finaltotal
                });
                console.log(JSON.stringify(this.state.purchases));
            }
        });
    }
    componentDidMount() {
        this.getpurchasehistory();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={divStyle}>
                    
                    <h2>Plates Purchased</h2>
                    <div>
                        <ul>
                            {this.state.purchases.map((purchase, index) => {
                                return (
                                    <div key={purchase.id} className="col-md-7">

                                        From: <strong>{purchase.restaurant.restname}</strong><br />
                                        {purchase.plate.description} <br />
                                        <strong>Quantity Purchased: </strong>{purchase.quantity}<br />
                                        <strong> Price per plate ${purchase.plate.price}</strong><br />

                                    </div>
                                );
                            })}
                            <button className="btn btn-secondary"><Link to='/userhome'> Return to Main Menu</Link></button>
                        </ul>
                    </div>

                </div>
            </div>


        );
    };
}

export default PurchaseHistory;
