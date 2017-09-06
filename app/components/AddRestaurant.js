// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";

var checkRestaurantState;
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
        // helpers.restaurantlist().then(function (response) {
        //     console.log("Got Restaurants from AddRestaurant.js Component");
        //     console.log(response);
        //     console.log(response.data);
        //     this.setState({
        //         restaurants: response.data
        //     });
        //     checkRestaurantState=this.state.restaurants;
        // }.bind(this));
    }

    // componentDidUpdate(prevState) {
    //     if(this.state.restaurant !== checkRestaurantState) {
    //     console.log("State has changed.");
    //     this.getrestaurant();
    //     }
    //     else {
    //     console.log("State has NOT changed.") ; 
    //     }
        // console.log("componentdidupdate this.state "+JSON.stringify(this.state.restaurants));
        // console.log("componentdidupdate previousState "+JSON.stringify(prevState));        
        // if(this.state !== previousState) {
            // helpers.restaurantlist().then(function (response) {
            //     console.log("Got updated Restaurants from AddRestaurant.js Component");
            //     console.log(response);
            //     console.log(response.data);
            //     this.setState({
            //         restaurants: response.data
            //     });
            // }.bind(this));
        // }
        // }

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
                 <h2>Add Restaurant Page</h2>
                <div className="col-md-6">
                    <div className="row" id="restaurantlist">
                        <h2>Current Restaurants</h2>
                        <ul>
                            {this.state.restaurants.map((restaurant, index) => {
                                return (
                                    <li key={restaurant.id}>
                                        Restaurant Name: {restaurant.restname}<br />
                                        Address: {restaurant.address}<br />
                                        Phone: {restaurant.phone}<br />
                                        Hours: {restaurant.hours}<br />
                                        Email: {restaurant.email}<br />
                                        Created By: {restaurant.createdBy}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div id="addrestaurantsection">
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
