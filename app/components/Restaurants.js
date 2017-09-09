// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import { Link } from "react-router-dom";

class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = { restaurants: [] };
        // this.state = {
        //     RestaurantName: "",
        //     Address: "",
        //     Hours: "",
        //     Phone: "",
        //     Email: "",
        //     CreatedBy: ""
        // };
        
    }

    getInitialState()  {
        return { restaurants: "" };
      }

    componentDidMount() {
    // getrestaurants() {
        helpers.restaurantlist().then(function (response) {
            console.log("Got Restaurants from AddRestaurant.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                restaurants: response.data
            });
            console.log("setState Restaurants is:");
            console.log(this.state.restaurants);
        }.bind(this));
    }


    render() {
        return (
            <div className="row">
                
                <div className="col-md-12">
                    <div className="panel panel-default">

                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-title">Current Restaurants</h2>
                            <button className="btn btn-medium"><Link to='/admin'> Back to Menu </Link></button>
                        </div>

                        <div className="panel-body">
                            <ul>
                                {this.state.restaurants.map((restaurant, index) => {
                                    return (
                                        <li key={restaurant.id}>
                                            <span><strong>Restauant:</strong> {restaurant.restname} </span> 
                                            <span><strong> Address/Phone:</strong> {restaurant.address} </span>
                                            <span>{restaurant.phone} </span> 
                                            <span><strong> Hours:</strong> {restaurant.hours} </span> 
                                            <span><strong> Email:</strong> {restaurant.email} </span> 
                                            <span><strong> Created By:</strong> {restaurant.createdBy} </span> 
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

export default Restaurants;
