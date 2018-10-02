import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./About.css";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="aboutTotal">
        <div className="aboutUsTitle">about us</div>
        <div className="exampleTrip josh">
          <img
            className="etPicOne"
            src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986431/RawTrails/DSC_6548.jpg"
            alt=""
          />
          <div className="etTitleText">
            <div className="etTitle">josh, the founder and guide</div>
            <div className="etText ">
              Life, no matter the situation takes a toll. To enjoy life more
              fully I spent time outdoors. I enjoyed it enough to quit my job
              and dedicate my time to helping others find the same joy I do.
            </div>
          </div>
        </div>
        <div className="aboutUsTitle">our adventures of twenty-eighteen</div>
        <div className="aboutTextPic">
          <div className="aboutTitleText">
            <div className="aboutTitle">white rim trail</div>
            <div className="aboutText">
              We took our bikes out of storage and geared them up in February
              for this epic trip. Southern Utah was beautiful and the weather
              was perfect. Check out more by clicking on the photo!
            </div>
          </div>
          <Link to="/ptmoab">
            <img
              className="aboutPic"
              src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986434/RawTrails/DSC_7797.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="exampleTrip">
          <Link to="/ptyosemite">
            <img
              className="etPicOne"
              src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986435/RawTrails/i-88ZTPhL-X2.jpg"
              alt=""
            />
          </Link>
          <div className="etTitleText">
            <div className="etTitle">camping in yosemite</div>
            <div className="etText">
              Haven't seen the stars in awhile? This kind of trip might be for
              you. We took off to California for a week of backpacking and rock
              climbing. Click on the picture to the right to see more photos
              about this adventure.
            </div>
          </div>
        </div>

        <div className="exampleTrip">
          <div className="etTitleText">
            <div className="etTitle">repeling in havasupai</div>
            <div className="etText">
              Love heights? We do! This was one of our favorite trips. The
              campgrounds are always clean and there is no place like it on
              earth. If you are looking to get out of the cold in winter then
              Arizona is the place to be. Click on the picture to the right to
              see more photos about this adventure.
            </div>
          </div>
          <Link to="/pthava">
            <img
              className="etPicTwo"
              src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986438/RawTrails/IMG_0358.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="exampleTrip etBot">
          <Link to="/ptcour">
            <img
              className="etPicThree"
              src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986449/RawTrails/Snapseed.jpg"
              alt=""
            />
          </Link>
          <div className="etTitleText">
            <div className="etTitle">backpacking in coeur d'alene</div>
            <div className="etText">
              Idaho is one of our favorite states. If you like the outdoors then
              you will stay busy here. On this trip we went backpacking around
              the lakes in Northern Idaho.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
