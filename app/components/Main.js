// Include React
import React from "react";

// Create the Main component
class Main extends React.Component{

  constructor () {
    super();
  }

  // Here we render the component
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="jumbotron">
            <h1>Last Meal</h1>
            <p><em>Get your discounted meal</em></p>
            {/* <Link to="/info"><button className="btn btn-default">Info</button></Link> */}
            {/* <Link to="/chat"><button className="btn btn-default">Comments</button></Link> */}
          </div>

          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">Link</a></li>
                </ul>
                <form className="navbar-form navbar-left">
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Link</a></li>
                </ul>
              </div>
            </div>
          </nav>          

          <div className="row">
            <h1>Testing</h1>
          </div>
        </div>

      </div>
    );
  };
};

// Export the component back for use in other files
// module.exports = Main;
export default Main;
