// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Grabs the Routes
// var routes = require("./config/routes");
// import routes from "./config/routes";
import Main from "./components/Main.js";


// This code here allows us to render our main component (in this case Parent)
// ReactDOM.render(routes, document.getElementById("app"));
ReactDOM.render(<Main/>, document.getElementById("app"));