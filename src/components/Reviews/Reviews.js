import React, { Component } from "react";
import axios from "axios";
import ImageZoom from "react-medium-image-zoom";
import {
  getReviews,
  addReview,
  updateReview,
  deleteReview
} from "../../redux/ducks/reviewReducer";
import { connect } from "react-redux";
import "./Reviews.css";

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      newReview: "",
      newPic: "",
      user: [],
      updateBoolean: false,
      userUpdateReview: "",
      updateIndex: null
    };
  }
  componentDidMount() {
    this.props.getReviews();
    axios.get("/api/getuser").then(response => {
      this.setState({ user: response.data });
    });
  }

  authPath = () => {
    axios
      .post("/api/trackpath", { path: "/" })
      .then((window.location.href = process.env.REACT_APP_HOME_PATH));
  };

  updateFunction = (reviewId, rv) => {
    this.props.updateReview(reviewId, rv);
    this.setState({
      updateBoolean: false,
      userUpdateReview: "",
      updateIndex: null
    });
  };

  newReviewFunction = (newReview, newPic) => {
    this.props.addReview(newReview, newPic);
    this.setState({
      newReview: "",
      newPic: ""
    });
  };

  logoutHandler = () => {
    axios.get("/api/logout").then(console.log("outie not an innie"));
  };

  render() {
    let {
      newReview,
      user,
      userUpdateReview,
      updateBoolean,
      newPic
    } = this.state;

    let reviewCard = this.props.reviews.slice(0, 4).map((element, index) => {
      return (
        <div className="reviewCard" key={element.review_id}>
          <div>
            <div className="reviewTextPic">
              <div className="reviewText">
                <h3 className="reviewerOnCard">{`Reviewer: ${
                  element.first_name
                } ${element.last_name}`}</h3>
                <h2 className="reviewOnCard">{element.review}</h2>
                <p className="dateOnCard">
                  {element.comment_date.slice(0, 10)}
                </p>
              </div>
              <div className="reviewPicDiv">
                <ImageZoom
                  image={{
                    src: element.image_one,
                    alt: "Review Picture",
                    className: "reviewPic",
                    style: { height: "25vh" }
                  }}
                  zoomImage={{
                    src: element.image_one,
                    alt: ""
                  }}
                />

                {/* <img className="reviewPic" src={element.image_one} alt="" /> */}
              </div>
            </div>
            {element.user_id === user.id ? (
              <div className="putButtons">
                <button
                  className="deleteReviewButton"
                  onClick={() => this.props.deleteReview(element.review_id)}
                >
                  delete
                </button>
                <button
                  className="updateReviewButton"
                  onClick={() =>
                    this.setState({
                      updateBoolean: !updateBoolean,
                      updateIndex: index
                    })
                  }
                >
                  update
                </button>
              </div>
            ) : (
              <div />
            )}
            <br />
            <div>
              {this.state.updateBoolean && index === this.state.updateIndex ? (
                <div className="submitUR">
                  <textarea
                    className="urText"
                    rows="5"
                    onChange={e =>
                      this.setState({ userUpdateReview: e.target.value })
                    }
                  />
                  <div>
                    <button
                      className="urSubmitButton"
                      onClick={() =>
                        this.updateFunction(element.review_id, userUpdateReview)
                      }
                    >
                      submit
                    </button>
                  </div>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      );
    });
    let addNewReview = (
      <div className="writeReview">
        <div className="writeReviewText">write a review</div>
        <textarea
          value={newReview}
          className="newReview"
          onChange={e => this.setState({ newReview: e.target.value })}
        />
        <div className="taCR">
          characters remaining: {200 - newReview.length}
        </div>
        <div>
          <div className="uploadPicText">upload picture url</div>
          <input
            value={newPic}
            className="newPicInput"
            type="url"
            placeholder="place your url here"
            onChange={e => {
              this.setState({ newPic: e.target.value });
            }}
          />
        </div>
        <div className="butts">
          <button
            className="newReviewButton"
            onClick={() => this.newReviewFunction(newReview, newPic)}
          >
            submit
          </button>
          <a href="http://206.189.220.112:3005/logout">
            <button
              className="newReviewButton"
              // onClick={() => this.logoutHandler()}
            >
              logout
            </button>
          </a>
        </div>
      </div>
    );
    let needToLogin = (
      <div className="loginToReview">
        <div className="loginText">login to write a review</div>
        <button
          className="loginButton"
          onClick={() => {
            this.authPath();
          }}
        >
          login
        </button>
      </div>
    );
    let reviewSection = user.id ? addNewReview : needToLogin;
    return (
      <div className="wholeReview">
        <div className="reviewsText">reviews</div>
        {reviewCard}
        {reviewSection}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.reviewReducer.reviews
  };
};

export default connect(
  mapStateToProps,
  { getReviews, addReview, updateReview, deleteReview }
)(Reviews);
