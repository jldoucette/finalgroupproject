// Include React
import React from "react";
import { Link, Redirect} from 'react-router-dom';
import helpers from "../utils/helpers.js";
import NewUser from "./NewUser.js";
import axios from "axios";
var userRole;

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: "",
            Password: "",
            redirect: false
        };
        this.collectInfo = this.collectInfo.bind(this);
    }

    collectInfo(event) {
        event.preventDefault();
        console.log("This.state");
        console.log(this.state);

        var logininput = {
            Username: this.state.Username,
            Password: this.state.Password,
        }
        console.log("This logininput passed");
        console.log(logininput);
        console.log(this.state.redirect);
        axios.put('/api/login', { logininput }).then((response) => {
            userRole=response.data.user_role;
            this.setState({redirect:true});
            console.log("Ran Helpers:/api/login");
            console.log(response);
            // <Redirect to="/purchaseplates"/>
            // <Route exact path="/" render={() => (
            //     <Redirect to="/purchaseplates" />
            // )} />
        })


        // helpers.loginuser(logininput).then((response) => {
        //     console.log("Login Component Completed");
        //     console.log(response);
        //     <Route exact path="/" render={() => (
        //         <Redirect to="/purchaseplates" />
        //     )} />
        // });



    }

    render() {
        const {redirect} = this.state;
        if (redirect && userRole=='U') {
            return <Redirect to='/purchaseplates'/>;
        }
        if (redirect && userRole=='A') {
            return <Redirect to='/addrestaurant'/>;
        }
        if (redirect && userRole=='R') {
            return <Redirect to='/addplate'/>;
        }

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-5">
                    <div id="loginpage">
                        <h2>Login Page</h2>

                        <form className="create-update-form" >
                            <div className="form-horizontal">
                                <div className="form-group form-group-lg">
                                    <label className="col-md-3 control-label" htmlFor="username">Username</label>
                                    <div className="col-md-4">
                                        <input type="text" id="username" value={this.state.Phone} name="username" onChange={(event) => {
                                            this.setState({
                                                Username: event.target.value
                                            })
                                        }} />
                                    </div>
                                </div>

                                <div className="form-group form-group-lg">
                                    <label className="col-md-3 control-label" htmlFor="password">Password</label>
                                    <div className="col-md-4">
                                        <input type="password" id="password" value={this.state.Password} name="password" onChange={(event) => {
                                            this.setState({
                                                Password: event.target.value
                                            })
                                        }} />
                                    </div>
                                </div>

                                <div className='col-md-10'>
                                    <button className="btn btn-default btn-large" onClick={this.collectInfo.bind(this)} type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default LogIn;

// import { Route, Redirect } from 'react-router'

// <Route exact path="/" render={() => (
//     loggedIn ? (
//         <Redirect to="/dashboard" />
//     ) : (
//             <PublicHomePage />
//         )
// )} />