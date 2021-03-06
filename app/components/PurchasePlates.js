// Include React
import React from "react";
import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";

const divStyle = {
    "background-color": "beige"
}


class PurchasePlates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plates: [],
            quantityordered: ""
        };
        

    }


    purchaseplate(id, restid, priorquantity, quantity) {
        helpers.purchaseplate(id,restid,priorquantity,quantity).then((response)=> {
            console.log("Purchased Plate from PurchasePlates.js Component");
            console.log(response);
            console.log(response.data);
           
            this.getplates();
         
            this.setState({
                quantityordered: ""
            });
        });
    }

    getplates() {
        helpers.purchaseoptions().then((response)=> {
            console.log("Got Plates from PurchasePlates.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                plates: response.data
            });
            console.log(JSON.stringify(this.state.plates));
        });
    }
    componentDidMount() {
        this.getplates();
    }



    render() {
        return (

            <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="panel panel-default">
                    <div className="panel-heading-custom panel-heading">
                        <h2 className="panel-Title">Plates Available for Purchase</h2>
                        <button className="btn btn-medium"><Link to='/userhome'> Back to Menu </Link></button>
                    </div>

                    <div className="panel-body">
            {/* <div className="row" style={divStyle}>

                <div className="title">
                    Plates to Purchase
                    <button className="btn btn-medium"><Link to='/userhome'> Back to Menu </Link></button>
                </div>
                <div className='col-md-12' >
                    <div> */}
                        <ul>
                            {this.state.plates.map((plate, index) => {
                                return (
                                    <div key={plate.id} className="col-md-6">
                                        From: <strong> {plate.restaurant.restname} </strong><br />
                                        {plate.description} <br />
                                        <strong>Main: </strong>{plate.protein} <strong> Side 1: </strong>{plate.side1} <strong> Side 2: </strong>{plate.side2} Side 3: {plate.side3}
                                        <strong>Quantity Available: </strong>{plate.quantity}<strong> Price per plate ${plate.price}</strong>
                                        <br />


                                        <label className="col-md-6 control-label" htmlFor="quantityordered">How Many Plates Would You Like?</label>
                                            <input type="text" id="quantityordered" value={this.state.quantityordered} name="quantityordered" onChange={(event) => {
                                                this.setState({
                                                    quantityordered: event.target.value
                                                })
                                            }} />
        
                                        <button className="btn btn-default btn-large" 
                                            onClick={() => 
                                                    this.purchaseplate(plate.id, plate.restaurantId, plate.quantity, this.state.quantityordered)
                                                }>Purchase
                                        </button>

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

export default PurchasePlates;
