import React, { Component } from "react";
import { logout } from "../../redux/ducks/authReducer";
import axios from "axios";
import { Link } from "react-router-dom";

import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../Stripe/Stripe";

import "./PlanTrip.css";
import { connect } from "react-redux";
import MyCalendar from "../Calendar/Calendar";

class PlanTrip extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
  }
  componentDidMount() {
    // axios.get("/api/checkUser");
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  authPath = () => {
    axios
      .post("/api/trackpath", { path: "/plantrip" })
      .then((window.location.href = "http://localhost:3005/login"));
  };
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "/api/sendemail",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    document.getElementById("contact-form").reset();
  }
  render() {
    console.log(this.props);
    let { trips, answers } = this.props;
    let tripCard = trips.map((trip, index) => {
      return (
        <div className="allPot">
          <div className="wholeTripCard" key={index}>
            <div className="potripPicContainer">
              <img
                className="potripPic"
                class="image"
                src={trip.tripPicOne}
                alt=""
              />
            </div>
            <div className="potripOverlay" class="overlay">
              <div className="potripName">{trip.tripName}</div>
              <div className="potripDesc">{trip.tripDescription}</div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="allTripCards">{tripCard}</div>
        <div className="ptQuizAgainDiv">
          <div className="ptQuizAgainText">DIDN'T LIKE YOUR RESULTS?</div>
          <Link className="ptQuizAgain" to="/quizone">
            take the quiz again
          </Link>
        </div>

        <div className="ptCal">
          <div className="ptCalAvail">check our availability below</div>
          <MyCalendar />
        </div>
        <div className="mailerStripe">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="formTitle">
              request your trip
              <div className="formTitleTT">
                tell us where you want to go and what to do
              </div>
            </div>
            <div className="formgroup">
              <label className="nameMailer">NAME</label>
              <input type="text" className="formcontrol" id="name" />
            </div>
            <div className="formgroup">
              <label for="exampleInputEmail1">EMAIL</label>
              <input
                type="email"
                className="formcontrol"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="formgroup">
              <label for="message">MESSAGE</label>
              <textarea
                className="formcontrol biggestForm"
                rows="10"
                id="message"
              />
            </div>
            <button
              // type="submit"
              className="btn"
            >
              Submit
            </button>
          </form>
          <div className="payment">
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
              <div className="example">
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    trips: state.quizReducer.trips,
    answers: state.quizReducer.answers
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(PlanTrip);
