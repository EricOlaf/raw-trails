import React, { Component } from "react";
import YouTube from "react-youtube";
// import { Player } from "video-react";
// import video from "../../assets/video/Yosemite JMT 1min.mov";
// import picVid from "../../assets/pics/1.jpg";

import "./VideoPage.css";
// import "../../../node_modules/video-react/dist/video-react.css";

class VideoPage extends Component {
  render() {
    const opts = {
      height: "468",
      width: "768",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div>
        <div className="videoContainer">
          {/* <Player playsInline poster={picVid} src={video} /> */}
          <YouTube videoId="FHWypyEY1zM" opts={opts} onReady={this._onReady} />
        </div>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoPage;
