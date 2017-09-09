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

    // handleChange(event) {
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
    // }

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
      <div className="row" >

            {/* Jon Form */}
            {/* <div className="container col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">
                <br />
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>Create New User</h2>
                    </div>

                    <div className="panel-body">
                        <form className="create-update-form" >
                            <div className="form-horizontal">

                                <div className="form-group">
                                    <label className="col-md-3 control-label" htmlFor="first_name">First Name:</label>
                                    <div className="col-md-4">
                                            <input type="text" id="first_name" value={this.state.FirstName} name="first_name" onChange={(event) => {
                                                this.setState({
                                                    FirstName: event.target.value
                                                })
                                            }} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" htmlFor="last_name">Last Name:</label>
                                    <div className="col-md-4">
                                        <input type="text" id="last_name" value={this.state.LastName}  name="last_name" onChange={(event) => {
                                            this.setState({
                                                LastName: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" htmlFor="username">Email (will be your username):</label>
                                    <div className="col-md-4">
                                    <input type="text" id="username" value={this.state.Email} name="username" onChange={(event) => {
                                            this.setState({
                                                Email: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" htmlFor="address">Address (street,city,state,zip):</label>
                                    <div className="col-md-4">
                                    <input type="text" id="address" value={this.state.Address} name="address" onChange={(event) => {
                                            this.setState({
                                                Address: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" htmlFor="phone">Phone:</label>
                                    <div className="col-md-4">
                                    <input type="text" id="phone" value={this.state.Phone} name="phone" onChange={(event) => {
                                            this.setState({
                                                Phone: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" htmlFor="password">Password:</label>
                                    <div className="col-md-4">
                                    <input type="password" id="password" value={this.state.Password} name="password" onChange={(event) => {
                                            this.setState({
                                                Password: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" htmlFor="user_role">Role (R or U):</label>
                                    <div className="col-md-4">
                                    <input type="text" id="user_role"value={this.state.Role} name="user_role" onChange={(event) => {
                                            this.setState({
                                                Role: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>

                                <div className="form-group">
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
            </div> */}
    
            {/* Geo form */}
            <div className= "col-md-6 col-md-offset-3">
                <div className="panel panel-default"> 
                    <div className="panel-heading">
                        <h2>Create New User</h2>
                    </div>

                    <div className="panel-body">                                           

                        <form className="form-horizontal">

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="Name (Full name)"> First Name </label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <input type="text" placeholder="First Name" id="first_name" name="first_name" value={this.state.FirstName} className="form-control input-md" 
                                            onChange={(event) => {
                                            this.setState({
                                                FirstName: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="last_name">Last Name: </label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <input type="text" id="last_name" value={this.state.LastName} placeholder="Last Name" className="form-control input-md" 
                                            onChange={(event) => {
                                            this.setState({
                                                LastName: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="username">Email (will be your username):</label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                        <i className="fa fa-envelope-o"></i>
                                        </div>
                                        <input type="text" id="username" value={this.state.Email} name="username" placeholder="Email Address" className="form-control input-md" 
                                            onChange={(event) => {
                                                this.setState({
                                                    Email: event.target.value
                                                })
                                            }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="password">Password: </label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-key"></i>
                                        </div>
                                        <input type="password" placeholder="Password" className="form-control input-md" id="password" value={this.state.Password} name="password" 
                                            onChange={(event) => {
                                            this.setState({
                                                Password: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label col-xs-12" htmlFor="address">Address (street,city,state,zip): </label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-home"></i>
                                        </div>
                                        <input type="text" id="address" placeholder="Address" className="form-control input-md " value={this.state.Address} name="address" 
                                            onChange={(event) => {
                                            this.setState({
                                                Address: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="phone">Phone: </label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <input type="text" id="phone" value={this.state.Phone} name="phone" placeholder="Phone number " className="form-control input-md" 
                                            onChange={(event) => {
                                                this.setState({
                                                    Phone: event.target.value
                                                })
                                            }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="user_role">Role (R or U):</label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <select className="form-control" type="text" id="user_role" value={this.state.Role} name="user_role" placeholder="Restaurant or User" 
                                            onChange={(event) => {
                                                this.setState({
                                                    Role: event.target.value
                                                })
                                            }}>
                                            <option value="U">User (U) </option>
                                            <option value="R">Restaurant (R) </option>
                                        </select>
                                    </div>
                                </div>
                            </div> 

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="rest_id">If R, Rest ID: </label>  
                                <div className="col-md-7">
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <input type="text" id="rest_id" value={this.state.RestID} name="rest_id" placeholder="Rest ID" className="form-control input-md" 
                                            onChange={(event) => {
                                            this.setState({
                                                RestID: event.target.value
                                            })
                                        }}/>
                                    </div>
                                </div>
                            </div>                             
                            

                            <div className="form-group">
                                <label className="col-md-3 control-label" ></label>  
                                <div className="col-md-7 offset-md-2">
                                    <button className="btn btn-success" onClick={this.enterInfo} type="submit"><span className="glyphicon glyphicon-thumbs-up"></span> Create New User </button>
                                    <button className="btn btn-danger" ><span className="glyphicon glyphicon-remove-sign"></span> Login Page </button >
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