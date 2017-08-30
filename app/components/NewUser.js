// Include React
import React from "react";

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
                RestID: ""};

    // this.enterInfo = this.enterInfo.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}
  

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
        FirstName: event.target.value,
        LastName: event.target.value,
        Email: event.target.value,
        Address: event.target.value,
        Phone: event.target.value,
        Password: event.target.value,
        Role: event.target.value,
        RestID: event.target.value
    });
  }

//   handleSubmit(event) {
//     alert('Your state is: ' + this.state);
//     event.preventDefault();
//   }




    // enterInfo() {
    //     axios
    //         .post('/api/newuser')
    //         .then(response => {
    //             this.setState({
    //                 FirstName: response.data.FirstName,
    //                 LastName: response.data.LastName,
    //                 Email: response.data.Email,
    //                 Address: response.data.Address,
    //                 Phone: response.data.Phone,
    //                 Password: response.data.Password,
    //                 Role: response.data.Role,
    //                 RestID: response.data.RestID
    //             });
    //         });
    // }

  // Here we render the component
  render() {
    return (
      <div className="row">
        <div className="col-md-10">
            <h2>New User Page</h2>
            <div id="loginpage">
                <div className="newuser">
                    <h2>Create New User</h2>

                    <form className="create-update-form" action="/newuser" method="POST" onSubmit={this.handleSubmit}>
                        <div className="form-horizontal">

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="first_name">First Name:</label>
                                <div className="col-md-4">
                                    <input type="text" id="first_name" value={this.state.FirstName} onChange={this.handleChange} name="first_name"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="last_name">Last Name:</label>
                                <div className="col-md-4">
                                    <input type="text" id="last_name" value={this.state.LastName} onChange={this.handleChange} name="last_name"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="username">Email (will be your username):</label>
                                <div className="col-md-4">
                                <input type="text" id="username" value={this.state.Email} onChange={this.handleChange} name="username"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="address">Address (street,city,state,zip):</label>
                                <div className="col-md-4">
                                <input type="text" id="address" value={this.state.Address} name="address"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="phone">Phone:</label>
                                <div className="col-md-4">
                                <input type="text" id="phone" value={this.state.Phone} name="phone"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="password">Password:</label>
                                <div className="col-md-4">
                                <input type="password" id="password" value={this.state.Password} name="password"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="user_role">Role (R or U):</label>
                                <div className="col-md-4">
                                <input type="text" id="user_role"value={this.state.Role} name="user_role"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <label className="col-md-3 control-label" for="rest_id">If R, Rest ID:</label>
                                <div className="col-md-4">
                                    <input type="text" id="rest_id" value={this.state.RestID} name="rest_id"/>
                                </div>
                            </div>

                            <div className='col-md-10'>
                                <button className="btn btn-default btn-large" onClick={()=>this.enterInfo()} type="submit">Create User</button>
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