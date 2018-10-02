import React, { Component } from "react";
import axios from "axios";

import BigCalendar from "react-big-calendar";
import moment from "moment";

import "./Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

moment().format("MMM Do YY");

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myEventsList: []
    };
  }
  componentDidMount = () => {
    axios
      .get("/api/events")
      .then(response => this.setState({ myEventsList: response.data }));
  };

  render() {
    return (
      <div className="cal">
        <BigCalendar
          localizer={localizer}
          events={this.state.myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}
export default MyCalendar;
