// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Grabs the Routes
import Routes from "./config/routes.js";

// This code here allows us to render our main component (in this case Parent)
// ReactDOM.render(routes, document.getElementById("app"));
ReactDOM.render(<Routes />, document.getElementById("app"));



    