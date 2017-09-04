// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";

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
                <div className="col-md-10">
                    <h2>Add Restaurant Page</h2>
                    <div className="row" id="restaurantlist">
                        <h2>Current Restaurants</h2>
                        <ul>
                            {this.state.restaurants.map((restaurant, index) => {
                                return (
                                    <li key={restaurant.id}>
                                        {restaurant.restname}
                                        {restaurant.address}
                                        {restaurant.phone}
                                        {restaurant.hours}
                                        {restaurant.email}
                                        {restaurant.createdBy}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};

export default Restaurants;
