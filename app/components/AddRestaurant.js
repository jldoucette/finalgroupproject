// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";

class AddRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RestaurantName: "",
            Address: "",
            Hours: "",
            Phone: "",
            Email: "",
            CreatedBy: ""
        };

        this.collectInfo = this.collectInfo.bind(this);
    }

    collectInfo(event) {
        event.preventDefault();
        console.log("This.state");
        console.log(this.state);

        var restaurantinput = {
            RestaurantName: this.state.RestaurantName,
            Address: this.state.Address,
            Hours: this.state.Hours,
            Phone: this.state.Phone,
            Email: this.state.Email,
            CreatedBy: this.state.CreatedBy,
        }
        console.log("This plateinput passed");
        console.log(restaurantinput);
        helpers.addrestaurant(restaurantinput).then(function () {
            console.log("Add Restaurant Component Completed");
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-10">
                    <h2>Add Restaurant Page</h2>
                    <div id="addrestaurantpage">
                        <div className="newrestaurant">
                            <h2>Create New Restaurant</h2>

                            <form className="create-update-form" >
                                <div className="form-horizontal">

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-3 control-label" htmlFor="restname">Restaurant Name:</label>
                                        <div className="col-md-4">
                                            <input type="text" id="restname" value={this.state.RestaurantName} name="restname" onChange={(event) => {
                                                this.setState({
                                                    RestaurantName: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-3 control-label" htmlFor="address">Address:</label>
                                        <div className="col-md-4">
                                            <input type="text" id="address" value={this.state.Address} name="address" onChange={(event) => {
                                                this.setState({
                                                    Address: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-3 control-label" htmlFor="hours">Hours:</label>
                                        <div className="col-md-4">
                                            <input type="text" id="hours" value={this.state.Hours} name="hours" onChange={(event) => {
                                                this.setState({
                                                    Hours: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-3 control-label" htmlFor="phone">Phone:</label>
                                        <div className="col-md-4">
                                            <input type="text" id="phone" value={this.state.Phone} name="phone" onChange={(event) => {
                                                this.setState({
                                                    Phone: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-3 control-label" htmlFor="email">Email:</label>
                                        <div className="col-md-4">
                                            <input type="text" id="email" value={this.state.Email} name="email" onChange={(event) => {
                                                this.setState({
                                                    Email: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className='col-md-10'>
                                        <button className="btn btn-default btn-large" onClick={this.collectInfo} type="submit">Create Restaurant</button>
                                        <a className="btn btn-default" href="/addrestaurant">Add Restaurant Page</a>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default AddRestaurant;
