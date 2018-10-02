import React, { Component } from "react";
import axios from "axios";
import GoogleMap from "../GoogleMap/GoogleMap";

import "./PastTripYosemite.css";

class PastTripYosemite extends Component {
  constructor() {
    super();
    this.state = {
      lat: 37.852083,
      lng: -119.542867,
      text: "Yosemite",
      weather: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/weather")
      .then(response => this.setState({ weather: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.weather);
    return (
      <div>
        <div className="ptImgOneYo">
          <div className="ptImgOneWordBoxYo">
            <div className="ptOneTitle">yosemite</div>
            <div className="ptOneDate">March-2018</div>
          </div>
        </div>
        <div className="ptDescContainer">
          <div className="ptDescTitle">Yosemite</div>
          <div className="ptDescText">
            Did this trail counter clockwise in three days in mid July. It was
            expectedly hot 100-120 degrees with almost no shade. We stayed at
            potato bottom A the first night. This is a beautiful spot on the
            river (a lot of mosquitos). Then took our time down to Murphy A.
            This is a must! By far the coolest campsite I have ever stayed at.
            (Make sure to stay at A not B or C) then went to airport A. This is
            a rather plain site. No shade or shelter. Beautiful view of airport
            tower though. We then went down Lathrope to the river and spent the
            day there. Overall and incredible trail. Pretty easy, some difficult
            spots. We then drove to Moab down the potash trail, worth it. I
            would recommend some off-road tires and to air down, at least in the
            sandy spots if you want to slow down. We did it in a 2017 Tacoma
            with a 2 inch lift and wrangler duratrac tires.
          </div>
          <div className="ptDescText">
            Incredible trail. Don’t miss it. Drove in FJCruiser, 33” MTs and no
            problem. There some very high cliffs and steep grades. Watch for the
            random rocks and dips in an otherwise issue-free trail. It’s in far
            better shape than the washboard filled trail I remember from 25
            years ago. This time (aug 2018) stayed at Murphy’s B for a night.
            1/2 way through the trail and perched atop a plateau. Windy night in
            our hammocks but wouldn’t have changed a thing. The drive up and
            down are not for sissies. Hardscrabble and Lathrop Canyon also have
            their steep spots. 4wd and clearance / AT/MT tires are a must.
          </div>
        </div>
        <div className="ptImgTwoYo" />
        <div className="ptGooMapsContainer">
          <div clasName="newGooM">
            <GoogleMap
              lat={this.state.lat}
              lng={this.state.lng}
              text={this.state.text}
            />
          </div>
        </div>
        <div className="ptImgThreeYo" />
        <div className="weatherContainer">
          <img
            className="weatherImg"
            src="https://res.cloudinary.com/rawtrails801/image/upload/v1538368008/Screen_Shot_2018-09-30_at_11.26.18_PM.png"
          />
        </div>
        <div className="ptImgFour" />
      </div>
    );
  }
}

export default PastTripYosemite;
