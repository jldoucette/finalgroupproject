// Include React
import React from "react";
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'

import Header from './Header';
import LogIn from './LogIn';
import NewUser from './NewUser';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <h1> Test </h1>
                <Switch>
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/newuser" component={NewUser}/>
                </Switch>
            </div>
        );
    }
}

export default Main;