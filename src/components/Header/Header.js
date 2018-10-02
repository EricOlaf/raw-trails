import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { getUser } from "../../redux/ducks/userReducer";
import { connect } from "react-redux";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuBool: false
    };
  }

  componentDidMount = () => {
    this.props.getUser();
  };

  dropDownHandler = () => {
    this.setState({ menuBool: !this.state.menuBool });
  };

  render() {
    console.log(this.props);
    let adminLink =
      this.props.isAdmin === "true" ? (
        <Link className="link" to="/admin">
          ADMIN
        </Link>
      ) : (
        <div />
      );
    let dropDownMenu =
      this.state.menuBool === true ? (
        <div className="dropLinks">
          {/* <Link className="dropLink" to="/">
            HOME
          </Link> */}
          <Link className="dropLink" to="/quizone">
            QUIZ
          </Link>
          <Link className="droplink" to="/plantrip">
            PLAN TRIP
          </Link>
          <Link className="dropLink" to="/about">
            ABOUT/FAQ
          </Link>
          <Link className="dropLink" to="/about">
            QUESTIONS
          </Link>
          {/* {adminLink} */}
        </div>
      ) : (
        <div />
      );
    return (
      <div className="header">
        <Link to="/">
          <img src={require("../../assets/logo.png")} className="logo" />
        </Link>
        {dropDownMenu}
        <button className="menuButton" onClick={() => this.dropDownHandler()}>
          MENU
        </button>

        <div className="links">
          {/* <Link className="link" to="/">
            HOME
          </Link> */}
          {/* <Link className="link" to="/quizone">
            QUIZ
          </Link> */}
          <Link className="link" to="/quizone">
            PLAN YOUR TRIP
          </Link>
          <Link className="link" to="/about">
            ABOUT US
          </Link>
          {adminLink}
          <div className="linkButton">
            <Link className="link hashLink" to="/instagram">
              #RAWTRAILS
            </Link>
          </div>
          {/* <Link className="link" to="/about">
            QUESTIONS
          </Link> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.userReducer.isAdmin
  };
};
export default connect(
  mapStateToProps,
  { getUser }
)(Header);
