// Include React
import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'


//Headers Top Parents
import Header from './Header.js';

import LogIn from './LogIn.js';
import NewUser from './NewUser.js';
import AboutUs from './AboutUs.js';
import Testing from './Testing.js';
import AddPlate from './AddPlate.js';
import AddRestaurant from './AddRestaurant.js';
import Restaurants from './Restaurants.js';
import Plates from './Plates.js';
import PurchasePlates from './PurchasePlates.js';



class Main extends React.Component {
    render () {
        return (
            <div className="container">
                <Header />

                <Switch>
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/newplates" component={Plates} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/newuser" component={NewUser} />
                    <Route exact path="/testing" component={Testing} />
                    <Route exact path="/addplate" component={AddPlate} />
                    <Route exact path="/addrestaurant" component={AddRestaurant} />
                    <Route exact path="/restaurants" component={Restaurants} />
                    <Route exact path="/purchaseplates" component={PurchasePlates} />
    
                </Switch>

            </div>
        );
    }
};

export default Main;