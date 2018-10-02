import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setQuizTwoAnswer } from "../../../redux/ducks/quizReducer";

import "./QuizTwo.css";

class QuizTwo extends Component {
  motorToState = () => {
    this.props.setQuizTwoAnswer("motor");
  };

  muscleToState = () => {
    this.props.setQuizTwoAnswer("muscle");
  };

  render() {
    console.log(this.props);
    return (
      <div className="quizTotal">
        <div className="QuestionsTitle">
          LET'S FIND AN IDEAL VACATION BASED ON YOUR PREFERENCES
        </div>
        <div className="QuestionsHeader">would you prefer?</div>

        <div className="questions">
          <div className="questionOne">
            <div className="qone">
              <Link to="/quizthree">
                <img
                  className="quizPic"
                  onClick={() => this.motorToState()}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7oVDxL-WjkuoNLr39vSxV9vtwz9-PkHRbjbkZ-VF8qfnAfQK"
                  alt=""
                />
              </Link>
            </div>
            <p className="question"> SOMETHING WITH A MOTOR</p>
          </div>
          <div className="questionTwo">
            <div className="qone">
              <Link to="/quizthree">
                <img
                  className="quizPic"
                  onClick={() => this.muscleToState()}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMM_S2bMmvhxBhtCGcgeCmWAWxfWVsEVutj8U1NmPNmzqgCMzA"
                  alt=""
                />
              </Link>
            </div>
            <p className="question"> JUST MY MUSCLES </p>
          </div>
        </div>
        <div className="emptySpace" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answerOne: state.quizReducer.answerOne,
    answerTwo: state.quizReducer.answerTwo
  };
};

export default connect(
  mapStateToProps,
  { setQuizTwoAnswer }
)(QuizTwo);
