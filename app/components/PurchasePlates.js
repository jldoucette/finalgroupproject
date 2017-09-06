// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";


class PurchasePlates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plates: [],
            quantityordered: ""
        };
    }



    purchaseplate(id, restid, priorquantity, quantity) {
        helpers.purchaseplate(id,restid,priorquantity,quantity).then(function (response) {
            console.log("Purchased Plate from PurchasePlates.js Component");
            console.log(response);
            console.log(response.data);
            // this.setState({
            //     plates: response.data
            // });
        }.bind(this));
    }

    getplates() {
        helpers.purchaseoptions().then(function (response) {
            console.log("Got Plates from PurchasePlates.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                plates: response.data
            });
            console.log(JSON.stringify(this.state.plates));
        }.bind(this));
    }
    componentDidMount() {
        this.getplates();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div id="purchasepage">
                        <h2>Plates to Purchase</h2>
                        <div className='col-md-12'>
                            <div>

                                <ul>
                                    {this.state.plates.map((plate, index) => {
                                        return (
                                            <li key={plate.id}>
                                                From: <strong>{plate.restaurant.restname}</strong><br />
                                                {plate.description} <br />
                                                <strong>Main: </strong>{plate.protein} <strong> Side 1: </strong>{plate.side1} <strong> Side 2: </strong>{plate.side2} Side 3: {plate.side3}
                                                <strong>Quantity Available: </strong>{plate.quantity}<strong> Price per plate ${plate.price}</strong><br />

                                                <label className="col-md-3 control-label" htmlFor="quantityordered">How Many Plates Would You Like?</label>
                                                    <input type="text" id="quantityordered" value={this.state.quantityordered} name="quantityordered" onChange={(event) => {
                                                        this.setState({
                                                            quantityordered: event.target.value
                                                        })
                                                    }} />
                                        


                                                {/* <label for="quantityordered"> How Many Meals Would You Like? </label>
                                                <input type="text" id="quantityordered" name="quantityordered" /> */}
                                                {/* <input type="hidden" name="restID" value={plate.restaurantId} />
                                                <input type="hidden" name="PlatePurchaseID" value={plate.id} /> */}
                                                <button className="btn btn-default btn-large" onClick={() => this.purchaseplate(plate.id, plate.restaurantId, plate.quantity, this.state.quantityordered)}>Purchase</button>
                                                {/* <button type="submit">Purchase Meals</button> */}

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

export default PurchasePlates;
