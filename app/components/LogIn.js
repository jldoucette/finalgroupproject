// Include React
import React from "react";
import {Link} from 'react-router-dom';

import NewUser from "./NewUser";

class LogIn extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="row">
            
                <div className="col-md-4 col-md-offset-5">
                    <div idName="loginpage">
                        <h2>Login Page</h2>
                        <div className='col-md-8'>
                            <form className="create-update-form" action="/login/?_method=PUT" method="POST">
                                {/* {{!-- <form className="form-inline"> --}} */}
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" name="username" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" name="password" />
                                </div>
                                <button type="submit" className="btn btn-default">Login</button>

                                <a className="btn btn-default"><Link to='/newuser'>Create New User</Link></a>
                                
                                {/* {{!-- </form> --}} */}
                            </form>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    };
}

export default LogIn;