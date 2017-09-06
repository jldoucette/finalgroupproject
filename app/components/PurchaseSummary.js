// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";


class PurchaseSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchases: [],
            purchasetotal:''
        };
    }



    purchaseorder(id,ordertotal) {
        if(ordertotal>0){
        helpers.purchaseorder(id,ordertotal).then((response)=> {
            console.log("Purchased Plate from PurchaseSummary.js Component");
            console.log(response);
            console.log(response.data);
            console.log("Paid $"+ordertotal);
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
        helpers.guestpurchases().then((response)=> {
            console.log("Got Plates from PurchasePlates.js Component");
            console.log(response);
            console.log(response.data);
            if(response.data.length>0){
            this.setState({
                purchases: response.data,
                guestidentity:response.data[0].guestId
            });
            var subtotal=0;
            var finaltotal=0;
            for (var i=0; i<response.data.length; i++) {
                var itemprice=parseFloat(response.data[i].plate.price);
                var platequantity=parseInt(response.data[i].quantity);
                subtotal=subtotal+(itemprice*platequantity);
                console.log(itemprice);
                console.log(subtotal);
            }
            finaltotal=subtotal.toFixed(2);
            console.log("Final Total" + finaltotal);
            this.setState({
                purchasetotal: finaltotal
            });
            console.log(JSON.stringify(this.state.purchases));
        }
        });
    }
    componentDidMount() {
        this.getpurchases();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div id="purchasepage">
                        <h2>Plates Purchased</h2>
                        <div className='col-md-12'>
                            <div>

                                <ul>
                                    {this.state.purchases.map((purchase, index) => {
                                        return (
                                            <li key={purchase.id}>
                                                From: <strong>{purchase.restaurant.restname}</strong><br />
                                                {purchase.plate.description} <br />
                                                <strong>Quantity Purchased: </strong>{purchase.quantity}<br />
                                                <strong> Price per plate ${purchase.plate.price}</strong><br />

                                                {/* <label className="col-md-3 control-label" htmlFor="quantityordered">How Many purchases Would You Like?</label>
                                                    <input type="text" id="quantityordered" value={this.state.quantityordered} name="quantityordered" onChange={(event) => {
                                                        this.setState({
                                                            quantityordered: event.target.value
                                                        })
                                                    }} /> */}
                                        


                                                {/* <label for="quantityordered"> How Many Meals Would You Like? </label>
                                                <input type="text" id="quantityordered" name="quantityordered" /> */}
                                                {/* <input type="hidden" name="restID" value={plate.restaurantId} />
                                                <input type="hidden" name="PlatePurchaseID" value={plate.id} /> */}
                                                {/* <button className="btn btn-default btn-large" onClick={() => this.purchaseplate(plate.id, plate.restaurantId, plate.quantity, this.state.quantityordered)}>Pay For Order</button> */}
                                                {/* <button type="submit">Purchase Meals</button> */}

                                            </li>
                                        );
                                    })}
                                    <h4>Purchase Total is ${this.state.purchasetotal}</h4>
                                <button className="btn btn-default btn-large" onClick={() => this.purchaseorder(this.state.guestidentity,this.state.purchasetotal)}>Pay For Order</button>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    };
}

export default PurchaseSummary;
