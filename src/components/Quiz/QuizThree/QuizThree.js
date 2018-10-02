import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  setQuizThreeAnswer,
  postAnswersToBackend
} from "../../../redux/ducks/quizReducer";

import "./QuizThree.css";

class QuizThree extends Component {
  adrenalineToState = () => {
    this.props.setQuizThreeAnswer("adrenaline");
  };

  relaxToState = () => {
    this.props.setQuizThreeAnswer("relax");
  };

  answersHandler = () => {
    const {
      answerOne,
      answerTwo,
      answerThree,
      postAnswersToBackend
    } = this.props;
    postAnswersToBackend({ answerOne, answerTwo, answerThree }).then(
      (window.location.href = "/#/plantrip")
    );
  };

  combinedAdrenalineHandler = async () => {
    await this.adrenalineToState();
    this.answersHandler();
  };

  combinedRelaxHandler = async () => {
    await this.relaxToState();
    this.answersHandler();
  };

  render() {
    return (
      <div className="quizTotal">
        <div className="QuestionsTitle">
          LET'S FIND AN IDEAL VACATION BASED ON YOUR PREFERENCES
        </div>
        <div className="QuestionsHeader">would you prefer?</div>

        <div className="questions">
          <div className="questionOne">
            <div className="qone">
              <img
                className="quizPic"
                onClick={() => this.combinedAdrenalineHandler()}
                src="https://fitt.co/san-francisco/wp-content/uploads/sites/26/2017/02/Andrew-Burr.jpg"
                alt=""
              />
            </div>
            <p className="question"> ADRENALINE RUSH </p>
          </div>

          <div className="questionTwo">
            <div className="qone">
              <img
                className="quizPic"
                onClick={() => this.combinedRelaxHandler()}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt1kteQPtIIy2rHRXKlm2-X7OZfsTdA8iORJyRR7E9kGTkcUlYQ"
                alt=""
              />
            </div>
            <p className="question"> REST AND RELAX </p>
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
    answerTwo: state.quizReducer.answerTwo,
    answerThree: state.quizReducer.answerThree
  };
};

export default connect(
  mapStateToProps,
  { setQuizThreeAnswer, postAnswersToBackend }
)(QuizThree);
