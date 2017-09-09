// Include React
import React from "react";

const divStyle = {
  backgroundColor: "#333",
  color: "white"
}

class AboutUs extends React.Component {
  constructor() {
    super();
  }

  //Render
  render() {
    return (

      <div className="row" style={divStyle}>
        <div className="container">
          <h1> Who We Are </h1>
          <hr/>
          <p><strong>LastCall </strong> 
            is a service that is created to fulfill the demands for restaurants as well as for people that enjoy professionally prepared meals, but at a lower cost.
            As people that have worked in the restaurant industry, we realize a big cost savings for many restaurants bottom line can be resolved through maximizing efficiency.
            Typically this means minimizing wasted resources. There are many overhead costs to running a restaurant, and being able to maximize the value of sunken costs,  such as time already commited for employees that prepare food, and avoiding food waste.
          </p>
          <p>We created a website that benefits both our member restaurants and customers in the local area who enjoy high quality restaurant meals in the comfort of their own home at a discounted cost.</p>

          <br/>
          <h1> Our Product </h1>
          <hr/>
          <p>Our Product allows our member restaurants to sell pre-defined meals as a take-out service towards the end of their business day which allows them to help recover the cost of food and labor that would ordinarily be lost as a cost of doing business if the portions go unsold.
              From a customer perspective, the benefit with this service is that they will be able to acquire high quality restaurant meals at a heavily discounted price towards the end of the restaurants hours. Rather than having unsold portions go unused, restaurants can post daily meal offerings (plates) which includes
            food items that were available to be sold at full price but were not sold during the dinner service.</p>

          <br/>
          <h1> How it Works </h1>
          <hr/>
            <p>Restaurants create a fixed plate for sale a main element and side dishes to be picked up by customers at the restaurant.
            This way restaurants can reduce the cost and environmental impact of discarding excess food inventory, and customers enjoy dishes that would have been sold that evening at full price in the restaurant for a big discount.
            Although the plate options are limited to what the restaurant creates, this service provides another option for customers…Lower Cost quality food from high quality restaurants!</p>
            <p>Our service allows restaurants to prepare meals that utilizes their excess resources and post it on our website. Although they won’t be able to make a huge profit margin from that item, they will be able to at least break even. The customers side of the website will be able to choose whatever option they want and pick it up at a designated time. The app itself will only have a pick up option, so customers that order food through the app won’t interfere with the restaurant’s main service.</p>
          </div>
      </div>
      
    );
  }
}

// Export the component back for use in other files
export default AboutUs;