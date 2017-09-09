// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import UpdateUser from "./UpdateUser.js";

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: [],
            FirstName: "",
            LastName: "",
            Email: "",
            Address: "",
            Phone: "",
            Password: "",
            Role: "",
            RestID: "",
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
        // this.collectInfo = this.collectInfo.bind(this);

    }
    getInitialState() {
        return { guests: "" };
    }
    componentDidMount() {
        this.getuserlist();
    }

    getuserlist() {
        console.log(this.state);
        helpers.allguestlist().then(function (response) {
            console.log("Got updated Guests from EditUser.js Component");
            console.log(response);
            console.log(response.data);
            this.setState({
                guests: response.data
            });

        }.bind(this));
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    updateUser(userdetails) {
        console.log("User ID" + JSON.stringify(userdetails));
    }

    pushInfo(id, info, type) {
        console.log("ID is " + id);
        console.log("Type is " + type);
        console.log("Info is " + info);
        switch (type) {
            case "role":
                helpers.updateuserroleinfo(id, info).then(function () {
                    console.log("Update User Role Component Completed");
                });
                console.log("User Role Updated");
                break;
            case "rest":
                helpers.updateuserrestinfo(id, info).then(function () {
                    console.log("Update User Rest Component Completed");
                });
                console.log("User Restaurant Updated");
                break;
        }
    
    }

    // collectInfo(event) {
    //     event.preventDefault();
    //     console.log("This.state");
    //     console.log(this.state);

    //     var userinput = {
    //         FirstName: this.state.FirstName,
    //         LastName: this.state.LastName,
    //         Email: this.state.Email,
    //         Address: this.state.Address,
    //         Phone: this.state.Phone,
    //         Password: this.state.Password,
    //         Role: this.state.Role,
    //         RestID: this.state.RestID
    //     }
    //     console.log("This user passed");
    //     console.log(userinput);
    //     helpers.updateuser(userinput).then((response) => {
    //         this.getusers();
    //         console.log("Edit User Completed");
    //     });

    // }

    render() {
        return (
            <div className="row">
                <h2>Edit User Page</h2>
                <div className="col-md-6">
                    <div className="row" id="restaurantlist">
                        <h2>Current Users</h2>
                        <ul>
                            {this.state.guests.map((guest, index) => {
                                return (
                                    <li key={guest.id}>
                                        FirstName: {guest.first_name}<br />,
                                                <div className="form-group">
                                            <label className="col-md-3 control-label" htmlFor="first_name">First Name:</label>
                                            <input type="text" id="first_name" value={this.state.FirstName} name="first_name" placeholder={guest.first_name} onChange={(event) => {
                                                this.setState({
                                                    FirstName: event.target.value
                                                })
                                            }} />
                                            <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                                guest.id,
                                                this.state.FirstName,
                                                "first"

                                            )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button>
                                        </div>

                                        LastName: {guest.last_name}<br />,
                                        <div className="form-group">
                                            <label className="col-md-3 control-label" htmlFor="last_name">Last Name:</label>
                                            <input type="text" id="last_name" value={this.state.LastName} name="last_name" placeholder={guest.last_name} onChange={(event) => {
                                                this.setState({
                                                    LastName: event.target.value
                                                })
                                            }} />
                                            <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                                guest.id,
                                                this.state.LastName,
                                                "last"

                                            )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button>
                                        </div>
                                        Email: {guest.email}<br />,
                                        <div className="form-group">
                                            <label className="col-md-3 control-label" htmlFor="email">email:</label>
                                            <input type="text" id="email" value={this.state.email} name="email" placeholder={guest.email} onChange={(event) => {
                                                this.setState({
                                                    Email: event.target.value
                                                })
                                            }} />
                                            <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                                guest.id,
                                                this.state.Email,
                                                "email"

                                            )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button>
                                        </div>
                                        Username: {guest.username}<br />,
                                        Address: {guest.address}<br />,
                                        <div className="form-group">
                                            <label className="col-md-3 control-label" htmlFor="address">Address:</label>
                                            <input type="text" id="address" value={this.state.Address} name="address" placeholder={guest.address} onChange={(event) => {
                                                this.setState({
                                                    Address: event.target.value
                                                })
                                            }} />
                                            <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                                guest.id,
                                                this.state.Address,
                                                "address"

                                            )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button>
                                        </div>
                                        Phone: {guest.phone}<br />,
                                        <div className="form-group">
                                            <label className="col-md-3 control-label" htmlFor="phone">Phone:</label>
                                            <input type="text" id="phone" value={this.state.Phone} name="phone" placeholder={guest.phone} onChange={(event) => {
                                                this.setState({
                                                    Phone: event.target.value
                                                })
                                            }} />
                                            <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                                guest.id,
                                                this.state.Phone,
                                                "phone"

                                            )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button>
                                        </div>
                                        Role: {guest.user_role}<br />,
                                        <div className="form-group">
                                            <label className="col-md-3 control-label" htmlFor="user_role">User Role:</label>
                                            <input type="text" id="user_role" value={this.state.Role} name="user_role" placeholder={guest.user_role} onChange={(event) => {
                                                this.setState({
                                                    Role: event.target.value
                                                })
                                            }} />
                                            <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                                guest.id,
                                                this.state.Role,
                                                "role"

                                            )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button>
                                        </div>
                                        RestID: {guest.RestID}<br />
                                        <div className="form-group">
                                            <label className="col-md-3 control-label" htmlFor="restID">Restaurant ID:</label>
                                            <input type="text" id="restID" value={this.state.RestID} name="restID" placeholder={guest.restID} onChange={(event) => {
                                                this.setState({
                                                    RestID: event.target.value
                                                })
                                            }} />
                                            <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                                guest.id,
                                                this.state.RestID,
                                                "rest"

                                            )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button>
                                        </div>
                                        <br />
                                        {/* <button onClick={this.handleClick}/>Edit User 
                                        {this.state.clicked ? <UpdateUser userdetails={this.state.guest}  />: null}/>  */}
                                        <button className="btn btn-default btn-small" onClick={() => this.updateUser(guest)}>Edit User</button>
                                        {/* <button className="btn btn-success btn-small" onClick={() => this.pushInfo(
                                            guest.id,
                                            this.state.FirstName,
                                            this.state.LastName,
                                            this.state.Email,
                                            this.state.Address,
                                            this.state.Phone,
                                            this.state.Role,
                                            this.state.RestId
                                        )}><span className="glyphicon glyphicon-thumbs-up"></span> Update Info</button> */}
                                    </li>

                                );
                            })}
                        </ul>




                    </div>
                </div>
            </div>
        );
    };
};



export default EditUser;