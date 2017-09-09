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
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-Title">Completed Orders</h2>
                            
                            <button className="btn btn-medium"><Link to='/restaurant'> Back to Menu </Link></button>
                        </div>
                        <div className="panel-body">
                                <ul>
                                    {this.state.orders.map((order, index) => {
                                        return (
                                            <li key={order.id}>

                                    
                                               Plate: <strong> {order.plate.description}</strong> <br />
                                                <strong>Quantity ordered: </strong>{order.quantity}<br />
                                                <strong> Price per plate ${order.plate.price}</strong><br />

                                            </li>
                                        );
                                    })}
                                   
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            


        );
    };
}

export default CompletedOrders;
