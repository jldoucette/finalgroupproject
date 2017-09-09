var React = require('react');
var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;
var axios = require("axios");


var Payment = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],

  getInitialState: function() {
    return {
      stripeLoading: false,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null,
      amount: 0
    };

  },


  getScriptURL: function() {
    return 'https://js.stripe.com/v2/';
  },

  onScriptLoaded: function() {
    if (!Payment.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('pk_test_v5zvJRUKNXiVf1Lvn1DAqdAL');

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  onSubmit: function(event) {
    var self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    
    console.log("Passed Total is "+this.props.totalAmount);
    Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        console.log("token is: "+self.state.token);
        console.log("responseid is: "+response.id);

    
        return axios.post("/charge",{
            amount:self.props.totalAmount,
           token: response.id
        }).then(function(result){
            console.log(result);
            if(result.data.paid) {

                self.props.onComplete("Paid")
          }
            else {
                self.props.onComplete("Failed")
            }
        })
      }
    });
  },

  render: function() {

    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
    else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Attempted</div>;
    }
    else {
      return (<form onSubmit={this.onSubmit} >
        <span>{ this.state.paymentError }</span><br />
        <input type='text' data-stripe='number' placeholder='credit card number' /><br />
        <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
        <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
        <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
      </form>);
    }
  }
});

module.exports = Payment;