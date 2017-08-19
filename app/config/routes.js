// Include the React library
var React = require("react");
// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;
var Router = router.Router;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the hashHistory prop to handle routing client side without a server
var hashHistory = router.hashHistory;

// Include the browserHistory prop to configure client side routing
// var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Info = require("../components/Info");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="info" component={Info} />
      {/* <Route path="chat" component={Chat} /> */}

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Info} />

    </Route>
  </Router>

);


// module.exports = (
//   // High level component is the Router component.
//   <Router history={browserHistory}>
//     <Route path="/" component={Main}>

//       {/* If user selects Search or Saved show the appropriate component */}
//       <Route path="Info" component={Info} />
//       {/* <Route path="Saved" component={Saved} /> */}

//       {/* If user selects any other path... we get the Home Route */}
//       <IndexRoute component={Info} />

//     </Route>
//   </Router>
// );