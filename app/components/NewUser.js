// Include React
import React from "react";

// Create the Main component
class NewUser extends React.Component{

  constructor () {
    super();
  }

  // Here we render the component
  render() {
    return (
      <div className="row">
        <div idName="loginpage">
            <h2>New User Page</h2>


            <div idName="row">
                <div idName="newuser">
                    <h2>Create New User</h2>

                    <form className="create-update-form" action="/newuser" method="POST">
                        <form className="form-horizontal">

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="first_name">First Name:</label>
                                <div className="col-md-4">
                                    <input type="text" idName="first_name" name="first_name"/>
                                </div>
                            </div>

                            <div classNameName="form-group form-group-lg">
                                <label classNameName="col-md-3 control-label" for="last_name">Last Name:</label>
                                <div classNameName="col-md-4">
                                    <input type="text" idName="last_name" name="last_name"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="username">eMail (will be your username):</label>
                                <div className="col-md-4">
                                <input type="text" idName="username" name="username"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="address">Address (street,city,state,zip):</label>
                                <div className="col-md-4">
                                <input type="text" id="address" name="address"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="phone">Phone:</label>
                                <div className="col-md-4">
                                <input type="text" id="phone" name="phone"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="password">Password:</label>
                                <div className="col-md-4">
                                <input type="password" id="password" name="password"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="user_role">Role (R or U):</label>
                                <div className="col-md-4">
                                <input type="text" id="user_role" name="user_role"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="rest_id">If R, Rest ID:</label>
                                <div className="col-md-4">
                                    <input type="text" id="rest_id" name="rest_id"/>
                                </div>
                            </div>

                            <div className='col-md-10'>
                                <button className="btn btn-default btn-large" type="submit">Create User</button>
                                <a className="btn btn-default" href="/login">Login Page</a>
                            </div>

                        </form>
                    </form>
                </div>
            </div>
        </div>         
      </div>
    );
  };
};

// Export the component back for use in other files
export default NewUser;