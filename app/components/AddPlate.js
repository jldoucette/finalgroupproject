// Include React
import React from "react";
// import { Link } from 'react-router-dom';
import helpers from "../utils/helpers.js";
import { Link } from "react-router-dom";
import Plate from "./Plates.js"

class AddPlate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PlateName: "",
            Description: "",
            Protein: "",
            Side1: "",
            Side2: "",
            Side3: "",
            Price: "",
            Quantity: "",
            PrepTime: "",
            DelayTime: "",
            CreatedBy: ""
        };

        this.collectInfo = this.collectInfo.bind(this);
    }

    collectInfo(event) {
        event.preventDefault();
        console.log("This.state");
        console.log(this.state);

        var plateinput = {
            PlateName: this.state.PlateName,
            Description: this.state.Description,
            Protein: this.state.Protein,
            Side1: this.state.Side1,
            Side2: this.state.Side2,
            Side3: this.state.Side3,
            Price: this.state.Price,
            Quantity: this.state.Quantity,
            PrepTime: this.state.PrepTime,
            DelayTime: this.state.DelayTime,
            CreatedBy: this.state.CreatedBy,
        }
        console.log("This plateinput passed");
        console.log(plateinput);
        helpers.addplate(plateinput).then(function () {
            console.log("Add Plate Component Completed");
        });
    }

    render() {
        return (
            <div class='row'>
                <div class='row'>
                    <Plate />
                </div>

                <div className="row">
                
                <div className="col-md-12">
                    <div className="panel panel-default">

                        <div className="panel-heading-custom panel-heading">
                            <h2 className="panel-title">Add Plates for Sale </h2>
                            <button className="btn btn-medium"><Link to='/restaurant'> Back to Menu </Link></button>
                        </div>

                        <div className="panel-body">
                {/* <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h1 className="panel-title">Add Plate Page</h1>
                                <button className="btn btn-medium"><Link to='/restaurant'> Back to Menu </Link></button>
                            </div>
                            <div className="panel-body"> */}
                                <form className="create-update-form" >
                                    <div className="form-horizontal">

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="plate_name">Plate Name:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="plate_name" value={this.state.PlateName} name="plate_name" onChange={(event) => {
                                                    this.setState({
                                                        PlateName: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="description">Description:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="description" value={this.state.Description} name="description" onChange={(event) => {
                                                    this.setState({
                                                        Description: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="protein">Protein:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="protein" value={this.state.Email} name="protein" onChange={(event) => {
                                                    this.setState({
                                                        Protein: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="side1">Side Dish 1:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="side1" value={this.state.Side1} name="side1" onChange={(event) => {
                                                    this.setState({
                                                        Side1: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="side2">Side Dish 2:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="side2" value={this.state.Side2} name="side2" onChange={(event) => {
                                                    this.setState({
                                                        Side2: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="side3">Side Dish 3:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="side3" value={this.state.Side3} name="side3" onChange={(event) => {
                                                    this.setState({
                                                        Side3: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="price">Price:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="price" value={this.state.Price} name="price" onChange={(event) => {
                                                    this.setState({
                                                        Price: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="quantity">Quantity Available:</label>
                                            <div className="col-md-7">
                                                <input type="quantity" id="quantity" value={this.state.Quantity} name="quantity" onChange={(event) => {
                                                    this.setState({
                                                        Quantity: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="preptime">Prep Time:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="preptime" value={this.state.PrepTime} name="preptime" onChange={(event) => {
                                                    this.setState({
                                                        PrepTime: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <div className="form-group form-group-lg">
                                            <label className="col-md-2 control-label" htmlFor="delaytime">Delay Time:</label>
                                            <div className="col-md-7">
                                                <input type="text" id="delaytime" value={this.state.DelayTime} name="delaytime" onChange={(event) => {
                                                    this.setState({
                                                        DelayTime: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <button className="btn btn-default btn-large" onClick={this.collectInfo} type="submit">Create Plate</button>
                                        <a className="btn btn-default" href="/addplate">Add Plate Page</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
};

export default AddPlate;
