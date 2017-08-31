// Include React
import React from "react";
import {Link} from 'react-router-dom';

class Plates extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Create A New Plate</h3>
                        </div>
                        <div className="panel-body">
                            <form className="create-update-form" action="/addplate" method="POST">
                                <form className="form-horizonal">
                                    <div className="form-group">
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="plate_name">Plate Name:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="plate_name" name="plate_name" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="description">Description:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="description" name="description" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="protein">Protein:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="protein" name="protein" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="side1">Side One:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="side1" name="side1" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="side2">Side Two:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="side2" name="side2" />
                                            </div>

                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="side3">Side Three:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="side3" name="side3" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="price">Price:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="price" name="price" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="quantity">Quantity:</label>
                                            <div className="col-md-8">
                                            <input type="text" id="price" name="quantity" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="preptime">Prep Time (Min):</label>
                                            <div className="col-md-8">
                                            <input type="text" id="preptime" name="preptime" />
                                            </div>
                                        </div>
                                        <div className="form-group form-group-md">
                                            <label className="col-md-4 control-label" for="delaytime">Delay Time (Min):</label>
                                            <div className="col-md-8">
                                            <input type="text" id="delaytime" name="delaytime" />
                                            </div>
                                        </div>
                                        <input type="hidden" name="restID" value="1" />
                                        <input type="hidden" name="createdby" value="1" />
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8">
                                        <button className="btn btn-default btn-large" type="submit">Add Plate</button>
                                    </div>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Plates;