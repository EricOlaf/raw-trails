import React, { Component } from "react";
import Slider from "react-slick";
import ImageZoom from "react-medium-image-zoom";

import "./PicCar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PicCar extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      pauseOnHover: true,
      draggable: true,
      className: "center"
    };

    return (
      <div className="picCarWhole">
        <div className="forTheArrows">
          <img
            className="arrowLeft"
            src="http://cdn.onlinewebfonts.com/svg/img_106237.png"
          />
          <img
            className="arrowRight"
            src="http://cdn.onlinewebfonts.com/svg/img_106237.png"
          />
          <Slider {...settings}>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986435/RawTrails/i-88ZTPhL-X2.jpg",
                  alt: "Stary Night",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986435/RawTrails/i-88ZTPhL-X2.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986445/RawTrails/IMG_9697.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986445/RawTrails/IMG_9697.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986443/RawTrails/IMG_3678.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986443/RawTrails/IMG_3678.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986443/RawTrails/IMG_3260.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986443/RawTrails/IMG_3260.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986434/RawTrails/DSC05052.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986434/RawTrails/DSC05052.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986406/RawTrails/DSC_0299.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986406/RawTrails/DSC_0299.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986434/RawTrails/DSC_7797.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986434/RawTrails/DSC_7797.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986447/RawTrails/Snapseed_5.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986447/RawTrails/Snapseed_5.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986431/RawTrails/DSC_6670.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986431/RawTrails/DSC_6670.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986444/RawTrails/IMG_6522.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986444/RawTrails/IMG_6522.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986436/RawTrails/i-KwBwG3m-X2.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986436/RawTrails/i-KwBwG3m-X2.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986433/RawTrails/DSC_7364.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986433/RawTrails/DSC_7364.jpg",
                  alt: ""
                }}
              />
            </div>
            <div className="sliderPic">
              <ImageZoom
                image={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986431/RawTrails/DSC_5769.jpg",
                  alt: "",
                  className: "sliderimg",
                  style: { height: "20vh" }
                }}
                zoomImage={{
                  src:
                    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986431/RawTrails/DSC_5769.jpg",
                  alt: ""
                }}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default PicCar;
