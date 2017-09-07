// Include React
import React from "react";
import { Link, Redirect } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import NewUser from "./NewUser.js";
import axios from "axios";
var userRole;

//Component Styling
const divStyle = {
    width: "100%"
};

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
            userRole = response.data.user_role;
            this.setState({ redirect: true });
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
        const { redirect } = this.state;
        if (redirect && userRole == 'U') {
            return <Redirect to='/purchaseplates' />;
        }
        if (redirect && userRole == 'A') {
            return <Redirect to='/addrestaurant' />;
        }
        if (redirect && userRole == 'R') {
            return <Redirect to='/addplate' />;
        }

        return (
            <div className="row">
                {/* <div className=" loginBox col-md-4 col-md-offset-5" style={divStyle}>
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
                </div> */}

                <div className="container col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4" >
                    <br />
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h1>Login</h1>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-user" ></i>
                                    </span>
                                    <input type="text" className="form-control" name="username" placeholder="Email" value={this.state.Phone}   onChange={(event) => {
                                        this.setState({
                                            Username: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-lock" ></i>
                                    </span>
                                    <input  type="password" className="form-control" name="password" placeholder="Password" value={this.state.Password} onChange={(event) => {
                                            this.setState({
                                                Password: event.target.value
                                            })
                                        }} />
                                </div>
                            </div>
                            <button id="btnLogin" style={divStyle} className="btn btn-default" onClick={this.collectInfo.bind(this)}>
                                Log In<i className="glyphicon glyphicon-log-in"></i>
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
        );
    };
}

export default LogIn;

