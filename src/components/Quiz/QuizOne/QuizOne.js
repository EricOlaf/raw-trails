import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setQuizOneAnswer } from "../../../redux/ducks/quizReducer";

import "./QuizOne.css";

class QuizOne extends Component {
  landToState = () => {
    this.props.setQuizOneAnswer("land");
  };

  waterToState = () => {
    this.props.setQuizOneAnswer("water");
  };

  render() {
    console.log(this.props.answerOne);
    return (
      <div className="quizTotal">
        <div className="QuestionsTitle">
          LET'S FIND AN IDEAL VACATION BASED ON YOUR PREFERENCES
        </div>
        <div className="QuestionsHeader">would you prefer?</div>

        <div className="questions">
          <div className="questionOne">
            <div className="qone">
              <Link to="/quiztwo">
                <img
                  className="quizPic"
                  onClick={() => this.landToState()}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUsxcrQe3x8wMm-m9FyHMQtsJ2bQNVNNubv2DF3hrttZltuBwZg"
                  alt=""
                />
              </Link>
            </div>
            <p className="question"> STAYING DRY ON LAND </p>
          </div>

          <div className="questionTwo">
            <div className="qone">
              <Link to="/quiztwo">
                <img
                  className="quizPic"
                  onClick={() => this.waterToState()}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBzNAoYQPZ_tQKhayAgqr8PscK3wdxyHx512nJxwSQvsananq"
                  alt=""
                />
              </Link>
            </div>
            <p className="question"> GETTING SOAKED </p>
          </div>
        </div>
        <div className="emptySpace" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answerOne: state.quizReducer.answerOne
  };
};

export default connect(
  mapStateToProps,
  { setQuizOneAnswer }
)(QuizOne);
