import React, { Component } from "react";

import ReactPlayer from "react-player";

import "./VideoPage.css";

class VideoPage extends Component {
  render() {
    return (
      <div>
        <div className="videoContainer">
          <ReactPlayer
            url="https://res.cloudinary.com/rawtrails801/video/upload/v1538704262/Yosemite_JMT_small.mp4"
            className="react-player"
            playing="false"
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
      </div>
    );
  }
}

export default VideoPage;
