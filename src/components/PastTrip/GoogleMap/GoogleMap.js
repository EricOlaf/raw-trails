import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import "./GoogleMap.css";

const AnyReactComponent = ({ text }) => (
  <div className="pinDiv">
    <img
      className="locaPin"
      src="http://icon-park.com/imagefiles/location_map_pin_navy_blue5.png"
    />
    {text}
  </div>
);

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      zoom: 7.5
    };
  }
  render() {
    console.log(this.state);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "70vh", width: "70vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOKEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.text}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
