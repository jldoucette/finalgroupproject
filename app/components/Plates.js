// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import { Link } from "react-router-dom";

class Plates extends React.Component {
    constructor(props) {
        super(props);
        this.state = { plates: [] };       
    }

    getInitialState()  {
        return { plates: "" };
      }

    componentDidMount() {
    
        helpers.getplates().then(function (response) {
            console.log("Got Restaurant Plates from Plates.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                plates: response.data
            });
        
            console.log(this.state.plates);
        }.bind(this));
    }


    render() {
        return (
            <div className="row">
                
                <div className="col-md-12">
                    <div className="panel panel-default">

                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-title">Current Plates for Your Restaurant </h2>
                            <button className="btn btn-medium"><Link to='/restaurant'> Back to Menu </Link></button>
                        </div>

                        <div className="panel-body">
                            <ul>
                                {this.state.plates.map((plate, index) => {
                                    return (
                                        <li key={plate.id}>
                                        {plate.description} <br />
                                        <strong>Main: </strong>{plate.protein} <strong> Side 1: </strong>{plate.side1} <strong> Side 2: </strong>{plate.side2} Side 3: {plate.side3}
                                        <strong>Quantity Available: </strong>{plate.quantity}<strong> Price per plate ${plate.price}</strong>
                                        <br />
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
};

export default Plates;
