import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Reviews from "../Reviews/Reviews";
import PicCar from "../PicCar/PicCar";
import Video from "../VideoPage/VideoPage";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      overlay: "overlayOff"
    };
  }

  // componentDidMount() {
  //   axios.get("/api/test").then(response => console.log(response));
  // }

  on = () => {
    this.setState({ overlay: "overlayOn" });
  };

  off = () => {
    this.setState({ overlay: "overlayOff" });
  };
  render() {
    return (
      <div className="wholeHome">
        <div>
          <div className="homeTextOne">raw trails</div>
          <div className="homeTextTwo">INSPIRING A LIFE OF ADVENTURE</div>
        </div>
        <div className="homePic">
          <Video />
          <PicCar />
          <div className="overlayAndQuiz">
            <div>
              <div className="overHome" onClick={() => this.on()}>
                what do we do?
              </div>
              <div
                className={this.state.overlay}
                onClick={() => this.off()}
                type="text"
              >
                <div className="overlayText">
                  <div className="overlayTextTitle">what do we do?</div>
                  <div className="overlayTextText">
                    We help you create, plan, and execute your dream outdoor
                    adventure.
                  </div>
                  <div className="overlayTextText">
                    Many want to rock climb, mountain bike, and kayak but don't
                    know where to start.
                  </div>
                  <div className="overlayTextText">
                    Let us know what you want to do and where and Raw Trails
                    will do the rest. We can get permits, book campsites and of
                    course have the training to help you have safe outdoor fun.
                  </div>
                </div>
              </div>
            </div>
            <Link className="adventureLink" to="/quizone">
              find your ideal adventure.
            </Link>
          </div>
          <div className="totyDiv">
            <Link className="tripsOfTheYear" to="/about">
              CHECK OUT SOME OF OUR TRIPS FROM THIS YEAR
            </Link>
          </div>
        </div>
        <Reviews />
      </div>
    );
  }
}

export default Home;
