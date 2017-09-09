// Include React
import React from "react";
import { Link, Redirect, Route } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import Payment from "./Payment.js";
import NewUser from "./NewUser.js";
import LogIn from "./LogIn.js";

var paymentstatus;
var stripetotalincents=0;

class PurchaseSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchases: [],
            purchasetotal:'',
            stripepurchasetotal:'',
            redirect:false
        };
        this.redirectOptions=this.redirectOptions.bind(this);
    }

    redirectOptions(paymentresult) {
        this.setState({ redirect: true });
        paymentstatus=paymentresult;
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
            stripetotalincents=parseInt(finaltotal*100);
            console.log("Final Total" + finaltotal);
            console.log("Final Stripe Total" + stripetotalincents);
            this.setState({
                purchasetotal: finaltotal,
                stripepurchasetotal:stripetotalincents

            });
            console.log(JSON.stringify(this.state.purchases));
        }
        });
    }
    componentDidMount() {
        this.getpurchases();
    }

    render() {

        const { redirect } = this.state;
        if (redirect && paymentstatus == 'Paid') {
             <Redirect to='/newuser' />;
        }
        if (redirect && paymentstatus != 'Paid') {
             <Redirect to='/login' />;
        }
    

        return (
            <div className="row">
                <div className="col-md-8">
                    
                    <h2>Plates Purchased</h2>
                    <div className='col-md-12'>                           
                        <ul>
                            {this.state.purchases.map((purchase, index) => {
                                return (
                                    <li key={purchase.id}>
                                        From: <strong>{purchase.restaurant.restname}</strong><br />
                                        {purchase.plate.description} <br />
                                        <strong>Quantity Purchased: </strong>{purchase.quantity}<br />
                                        <strong> Price per plate ${purchase.plate.price}</strong><br />

                                    </li>
                                );
                            })}
                            <h4>Purchase Total is ${this.state.purchasetotal}</h4>
                            <button className="btn btn-default btn-large" onClick={() => this.purchaseorder(this.state.guestidentity,this.state.purchasetotal)}>Pay For Order</button>
                        </ul>
                    </div>
               
                </div>
                <div className="col-md-3 col-md-offset-1">
                    <Payment totalAmount={this.state.stripepurchasetotal} onComplete={function(paymentresult){
                        console.log(paymentresult);
                    }} />
                    

                </div>
            </div>


        );
    };
}

export default PurchaseSummary;
