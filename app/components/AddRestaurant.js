// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";

var checkRestaurantState;

const fontStyle = {
    fontFamily: "Bree Serif",
}

const paddingBuffer = {
    paddingBottom: "15px"
}

class AddRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            RestaurantName: "",
            Address: "",
            Hours: "",
            Phone: "",
            Email: "",
            CreatedBy: ""
        };

        this.collectInfo = this.collectInfo.bind(this);
    }

    getInitialState()  {
        return { restaurants: "" };
      }

    componentDidMount() {
        this.getrestaurant();

    }

    getrestaurant() {
        helpers.restaurantlist().then(function (response) {
            console.log("Got updated Restaurants from AddRestaurant.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                restaurants: response.data
            });
            checkRestaurantState=response.data;
        }.bind(this));
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
        console.log("This restaurantinput passed");
        console.log(restaurantinput);
        helpers.addrestaurant(restaurantinput).then((response) => {
            this.getrestaurant();
            console.log("Add Restaurant Component Completed");
        });
    
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-title" style={fontStyle}>Current Restaurants</h2>
                        </div>
                        <ul>
                            {this.state.restaurants.map((restaurant, index) => {
                                return (
                                    <div className="hello" style={paddingBuffer}>
                                        <div key={restaurant.id}>
                                            Restaurant Name: {restaurant.restname}<br />
                                            Address: {restaurant.address}<br />
                                            Phone: {restaurant.phone}<br />
                                            Hours: {restaurant.hours}<br />
                                            Email: {restaurant.email}<br />
                                            Created By: {restaurant.createdBy}
                                        </div>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>  
                </div>

                <div className="col-md-5 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-title" style= {fontStyle }>Create New Restaurant</h2>
                        </div>
                        <div className="panel-body">
                            <form className="create-update-form" >
                                <div className="form-horizontal">

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-4 control-label" htmlFor="restname">Restaurant Name:</label>
                                        <div className="col-md-7">
                                            <input type="text" id="restname" value={this.state.RestaurantName} name="restname" onChange={(event) => {
                                                this.setState({
                                                    RestaurantName: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-4 control-label" htmlFor="address">Address:</label>
                                        <div className="col-md-7">
                                            <input type="text" id="address" value={this.state.Address} name="address" onChange={(event) => {
                                                this.setState({
                                                    Address: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-4 control-label" htmlFor="hours">Hours:</label>
                                        <div className="col-md-7">
                                            <input type="text" id="hours" value={this.state.Hours} name="hours" onChange={(event) => {
                                                this.setState({
                                                    Hours: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-4 control-label" htmlFor="phone">Phone:</label>
                                        <div className="col-md-7">
                                            <input type="text" id="phone" value={this.state.Phone} name="phone" onChange={(event) => {
                                                this.setState({
                                                    Phone: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>

                                    <div className="form-group form-group-lg">
                                        <label className="col-md-4 control-label" htmlFor="email">Email:</label>
                                        <div className="col-md-7">
                                            <input type="text" id="email" value={this.state.Email} name="email" onChange={(event) => {
                                                this.setState({
                                                    Email: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>


                                    <button className="btn btn-secondary" onClick={this.collectInfo}  type="submit">Create Restaurant</button>


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
