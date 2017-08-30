// Include React
import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'

import Header from './Header.js';
import LogIn from './LogIn.js';
import NewUser from './NewUser.js';
import AboutUs from './AboutUs.js';

class Main extends React.Component {
    render () {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/newuser" component={NewUser} />
                </Switch>
            </div>
        );
    }
};

export default Main;