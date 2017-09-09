// Include React
import React from "react";
import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";


class CompletedOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    getcompletedorders() {
        helpers.completedorders().then((response) => {
            console.log("Got Plates from CompletedOrders.js Component");
            console.log(response);
            console.log(response.data);
            if (response.data.length > 0) {
                this.setState({
                    orders: response.data              
                });
            }
        });
    }
    componentDidMount() {
        this.getcompletedorders();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div id="purchasepage">
                        <h2>Completed Orders</h2>
                        <div className='col-md-12'>
                            <div>

                                <ul>
                                    {this.state.orders.map((order, index) => {
                                        return (
                                            <li key={order.id}>

                                                From: <strong>{order.restaurant.restname}</strong><br />
                                                {order.plate.description} <br />
                                                <strong>Quantity ordered: </strong>{order.quantity}<br />
                                                <strong> Price per plate ${order.plate.price}</strong><br />

                                                {/* <label className="col-md-3 control-label" htmlFor="quantityordered">How Many orders Would You Like?</label>
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
                                    <button><Link to='/restaurant'> Return to Main Menu</Link></button>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    };
}

export default CompletedOrders;
