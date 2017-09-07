// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";


class PendingOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
         
        };
    }



    finishplate(id) {
        console.log("Plate ID to complete: "+id);
        helpers.completeplate(id).then((response)=> {
            console.log("Finished Plate from PendingPlates.js Component");
            console.log(response);
            console.log(response.data);
            this.getpending();

        });
    }

    

    getpending() {
        helpers.pendingorders().then((response)=> {
            console.log("Got Pending Orders from PendingOrders.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                orders: response.data
            });
            console.log(JSON.stringify(this.state.orders));
        });
    }
    componentDidMount() {
        this.getpending();
    }

    render() {
        var incrtext={fontSize: '200%',
    color: 'blue'};
        return (
            <div className="row">
                <div className="col-md-8">
                    <div id="purchasepage">
                        <h2>Pending Orders</h2>
                        <div className='col-md-12'>
                            <div>

                                <ul>
                                    {this.state.orders.map((order, index) => {
                                        return (
                                            <li key={order.id}>
                                                Order For: <strong>{order.guest.username} {order.guest.first_name} {order.guest.last_name}</strong><br />
                                                <span style={incrtext}>{order.plate.description}</span> <br />
                                                <strong>Main: </strong>{order.plate.protein} <strong> Side 1: </strong>{order.plate.side1} <strong> Side 2: </strong>{order.plate.side2} Side 3: {order.plate.side3} 
                                                <strong> Quantity Ordered: </strong><span style={incrtext}>{order.quantity}</span><br />

                                                {/* <label className="col-md-3 control-label" htmlFor="quantityordered">How Many Plates Would You Like?</label>
                                                    <input type="text" id="quantityordered" value={this.state.quantityordered} name="quantityordered" onChange={(event) => {
                                                        this.setState({
                                                            quantityordered: event.target.value
                                                        })
                                                    }} /> */}
                                        


                                                {/* <label for="quantityordered"> How Many Meals Would You Like? </label>
                                                <input type="text" id="quantityordered" name="quantityordered" /> */}
                                                {/* <input type="hidden" name="restID" value={plate.restaurantId} />
                                                <input type="hidden" name="PlatePurchaseID" value={plate.id} /> */}
                                                <button className="btn btn-default btn-large" onClick={() => this.finishplate(order.id)}>Complete Order</button>
                                                {/* <button type="submit">Purchase Meals</button> */}
                                                <br />
                                            </li>
                                           
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    };
}

export default PendingOrders;
