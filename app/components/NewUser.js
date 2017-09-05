// Include React
import React from "react";
import helpers from "../utils/helpers.js";

// Create the Main component
class NewUser extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
                FirstName: "",
                LastName: "",
                Email: "",
                Address: "",
                Phone: "",
                Password: "",
                Role: "",
                RestID: ""
            };

    this.enterInfo = this.enterInfo.bind(this);
}
  

//   handleChange(event) {
//     console.log(event.target.value);
//     this.setState({
//         FirstName: event.target.value,
//         LastName: event.target.value,
//         Email: event.target.value,
//         Address: event.target.value,
//         Phone: event.target.value,
//         Password: event.target.value,
//         Role: event.target.value,
//         RestID: event.target.value
//     });
//   }


    enterInfo(event) {
        event.preventDefault();
        var newuserinput = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            Address: this.state.Address,
            Phone: this.state.Phone,
            Password: this.state.Password,
            Role: this.state.Role,
            RestID: this.state.RestID 
        }       
        console.log(this.state);

        console.log("This newuserinput passed");
        console.log(newuserinput);
        helpers.addnewuser(newuserinput).then(function () {
            console.log("Add New User Component Completed");
        });
        
    }


  // Here we render the component
  render() {
    return (
      <div className="row">
        <div className="col-md-10">
            <h2>New User Page</h2>
            <div id="loginpage">
                <div className="newuser">
                    <h2>Create New User</h2>

                    <form className="create-update-form" >
                        <div className="form-horizontal">

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="first_name">First Name:</label>
                                <div className="col-md-4">
                                    <input type="text" id="first_name" value={this.state.FirstName} name="first_name" onChange={(event) => {
                                        this.setState({
                                            FirstName: event.target.value
                                        })
                                    }} />
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="last_name">Last Name:</label>
                                <div className="col-md-4">
                                    <input type="text" id="last_name" value={this.state.LastName}  name="last_name" onChange={(event) => {
                                        this.setState({
                                            LastName: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="username">Email (will be your username):</label>
                                <div className="col-md-4">
                                <input type="text" id="username" value={this.state.Email} name="username" onChange={(event) => {
                                        this.setState({
                                            Email: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="address">Address (street,city,state,zip):</label>
                                <div className="col-md-4">
                                <input type="text" id="address" value={this.state.Address} name="address" onChange={(event) => {
                                        this.setState({
                                            Address: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="phone">Phone:</label>
                                <div className="col-md-4">
                                <input type="text" id="phone" value={this.state.Phone} name="phone" onChange={(event) => {
                                        this.setState({
                                            Phone: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="password">Password:</label>
                                <div className="col-md-4">
                                <input type="password" id="password" value={this.state.Password} name="password" onChange={(event) => {
                                        this.setState({
                                            Password: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="user_role">Role (R or U):</label>
                                <div className="col-md-4">
                                <input type="text" id="user_role"value={this.state.Role} name="user_role" onChange={(event) => {
                                        this.setState({
                                            Role: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" htmlFor="rest_id">If R, Rest ID:</label>
                                <div className="col-md-4">
                                    <input type="text" id="rest_id" value={this.state.RestID} name="rest_id" onChange={(event) => {
                                        this.setState({
                                            RestID: event.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className='col-md-10'>
                                <button className="btn btn-default btn-large" onClick={this.enterInfo} type="submit">Create User</button>
                                <a className="btn btn-default" href="/login">Login Page</a>
                            </div>

                        </div>
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