import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

import "./Stripe.css";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!");
  }

  nothing() {
    console.log("nothing");
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p className="stripeText">
          booking fee
          <div className="stripeTT">$500 minimum to book a trip</div>
        </p>
        <CardElement />
        <button
          onClick={
            this.nothing()
            // this.submit
          }
        >
          Send
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
