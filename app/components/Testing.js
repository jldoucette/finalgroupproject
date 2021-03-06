// Include React
import React from "react";
import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import NewUser from "./NewUser.js";


class Testing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { plates: [] };
        this.getplates = this.getplates.bind(this);
    }

    
    getplates() {
        helpers.purchaseoptions().then(function(response) {
            console.log("Got Plates from Testing.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                            plates: response.data
                        });
                    }.bind(this));
        }

        purchaseplate(id) {
            helpers.purchaseplate(id).then(function(response) {
                console.log("Purchased Plate from Testing.js Component");
                // console.log(response);
                // console.log(response.data);
                // this.setState({
                //                 plates: response.data
                //             });
                //         }.bind(this));
            });
            } 
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-5">
                    <div id="loginpage">
                        <h2>Login Page</h2>
                        <div className='col-md-8'>
                            {/* <form className="create-update-form" action="/login/?_method=PUT" method="POST"> */}
                            {/* <form className="form-inline">
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" name="username" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" name="password" />
                                </div> */}
                            <button onClick={() => helpers.runRetrieve()}>Test Button</button>
                            <button onClick={() => helpers.guestupdate()}>Guest Update Button</button>
                            <button onClick={() => helpers.addnewuser(
                                {
                                    FirstName: "Kenny",
                                    LastName: "Kensington",
                                    Email: "ken@ken.com",
                                    Address: "1234 Main Street",
                                    Phone: "415-555-1414",
                                    Password: "asdf",
                                    Role: "R",
                                    RestID: "1"
                                }
                            )}>Add Guest Button</button>
                            <button onClick={() => helpers.allguestlist()}>All Guest List Button</button>
                            <button onClick={() => helpers.restaurantlist()}>Restaurant List Button</button>
                            <button onClick={() => this.getplates()}>Purchase Options Button</button>

                            {/* <button type="submit" className="btn btn-default">Login</button> */}
                            {/* </form> */}
                            {/* </form> */}

                        </div>
                        <div>
                            <h2>Plates to Purchase</h2>
                            <ul>
                                {this.state.plates.map((plate, index) => {
                                    return (
                                        <li key={plate.id}>
                                            {plate.description}  {plate.protein}
                                            <button onClick={()=>this.purchaseplate(plate.id)}>Purchase</button>
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

export default Testing;