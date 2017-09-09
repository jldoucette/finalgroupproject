// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import { Link } from "react-router-dom";


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
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-Title">Pending Orders</h2>
                            <button className="btn btn-medium"><Link to='/restaurant'> Back to Menu </Link></button>
                        </div>
                    
                        <div className="panel-body">
                            <ul>
                                {this.state.orders.map((order, index) => {
                                    return (
                                        <div key={order.id}>
                                            Order For: <strong>{order.guest.username} {order.guest.first_name} {order.guest.last_name}</strong><br />
                                            <span style={incrtext}>{order.plate.description}</span> <br />
                                            <strong>Main: </strong>{order.plate.protein} <strong> Side 1: </strong>{order.plate.side1} <strong> Side 2: </strong>{order.plate.side2} Side 3: {order.plate.side3} 
                                            <strong> Quantity Ordered: </strong><span style={incrtext}>{order.quantity}</span><br />
                                            <button className="btn btn-default btn-large" onClick={() => this.finishplate(order.id)}>Complete Order</button>
                                            <br />
                                        </div> 
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

export default PendingOrders;
