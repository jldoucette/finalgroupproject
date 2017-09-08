// Include React
import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'


//Headers Top Parents
import Header from './Header.js';
import LogIn from './LogIn.js';
import Logout from './Logout.js';
import NewUser from './NewUser.js';
import AboutUs from './AboutUs.js';

import UserMain from './UserMain.js';
import RestMain from './RestMain.js';
import AdminMain from './AdminMain.js';


import Testing from './Testing.js';
import AddPlate from './AddPlate.js';
import AddRestaurant from './AddRestaurant.js';
import Restaurants from './Restaurants.js';
// import Plates from './Plates.js';
import PurchasePlates from './PurchasePlates.js';
import PurchaseSummary from './PurchaseSummary.js';
import PendingOrders from './PendingOrders.js';
import NotAuthorized from './NotAuthorized.js';
import NotLoggedIn from './NotLoggedIn.js';



class Main extends React.Component {
    render () {
        return (
            <div className="container">
                <Header />

                <Switch>
                    <Route exact path="/aboutus" component={AboutUs} />
                    {/* <Route exact path="/newplates" component={Plates} /> */}
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/newuser" component={NewUser} />

                    <Route exact path="/userhome" component={UserMain} />
                    <Route exact path="/restaurant" component={RestMain} />
                    <Route exact path="/admin" component={AdminMain} />

                    <Route exact path="/testing" component={Testing} />
                    <Route exact path="/addplate" component={AddPlate} />
                    <Route exact path="/addrestaurant" component={AddRestaurant} />
                    <Route exact path="/restaurants" component={Restaurants} />
                    <Route exact path="/purchaseplates" component={PurchasePlates} />
                    <Route exact path="/purchaseplates" component={PurchasePlates} />
                    <Route exact path="/purchasesummary" component={PurchaseSummary} />
                    <Route exact path="/pendingorders" component={PendingOrders} />
                    <Route exact path="/notloggedin" component={NotLoggedIn} />
    
                </Switch>

            </div>
        );
    }
};

export default Main;