// Include React
import React from "react";
import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";

const divStyle = {
    backgroundColor: "beige"
}


class OrderConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchases: []
        };
    }
    purchaseorder(id, ordertotal) {
        if (ordertotal > 0) {
            helpers.purchaseorder(id, ordertotal).then((response) => {
                console.log("Purchased Plate from PurchaseSummary.js Component");
                console.log(response);
                console.log(response.data);
                console.log("Paid $" + ordertotal);
                this.getpurchases();
                // this.setState({
                //     plates: response.data
                // });
            });
        }
        else {
            console.log("Nothing to purchase");
        }
    }

    getpurchases() {
        helpers.guestpurchases().then((response) => {
            console.log("Got Plates from OrderConfirm.js Component");
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
        })
    }




    componentDidMount() {
        this.getpurchases();
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-Title">Order Complete</h2>
                            <button className="btn btn-default btn-large" onClick={() => this.purchaseorder(this.state.guestidentity, this.state.purchasetotal)}>Confirm and Finalize</button>
                            <button className="btn btn-medium"><Link to='/userhome'> Back to Menu </Link></button>
                        </div>

                        <div className="panel-body">

                            {/* <div className="row">
                                <div className="col-md-12" style={divStyle}> */}




                            <ul>
                                {this.state.purchases.map((purchase, index) => {
                                    return (
                                        <div key={purchase.id} className="col-md-12">

                                            From: <strong> {purchase.restaurant.restname} </strong>
                                            {purchase.plate.description} 
                                            <strong> Quantity Purchased: </strong>{purchase.quantity}
                                            <strong> Price per plate ${purchase.plate.price}</strong><br />

                                        </div>
                                    );
                                })}
                                <h4>Your Purchased and Charged Total was ${this.state.purchasetotal}</h4>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


        );
    };
}

export default OrderConfirm;
