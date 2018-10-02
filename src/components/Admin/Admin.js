import React, { Component } from "react";
import axios from "axios";

import MyCalendar from "../Calendar/Calendar";

import "./Admin.css";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      openStart: "",
      openEnd: "",
      closedStart: "",
      closedEnd: "",
      addAdminFirst: "",
      addAdminLast: "",
      addGearType: "",
      addGearCondition: "",
      addGearDescription: "",
      gearList: [],
      findGearType: "",
      findGearCon: "",
      gearNum: 0
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/gearlist")
      .then(response => this.setState({ gearList: response.data }));
  };

  openSubmit = (title, start, end) => {
    axios
      .post("/api/addopen", { title, start, end })
      .then(
        console.log("Request Completed"),
        this.setState({ openStart: "", openEnd: "" })
      );
  };
  closedSubmit = (title, start, end) => {
    axios
      .post("/api/addreserved", { title, start, end })
      .then(
        console.log("Request Completed"),
        this.setState({ closedStart: "", closedEnd: "" })
      );
  };
  addAdminSubmit = (isAdmin, first, last) => {
    axios
      .post("/api/addadmin", { isAdmin, first, last })
      .then(
        console.log("Request Completed"),
        this.setState({ addAdminFirst: "", addAdminLast: "" })
      );
  };
  addGearSubmit = (gearName, gearCondition, gearDescription) => {
    axios
      .post("/api/addgear", { gearName, gearCondition, gearDescription })
      .then(response =>
        this.setState({
          addGearType: "",
          addGearCondition: "",
          addGearDescription: "",
          gearList: response.data
        })
      );
  };

  deleteGearHandler = id => {
    axios
      .delete(`/api/gear/${id}`)
      .then(response => this.setState({ gearList: response.data }));
  };

  // gearLength = () =>{
  //   if (element.gear_type.toLowerCase().includes(findGearType.toLowerCase()) &&
  //   element.gear_condition.toLowerCase().includes(findGearCon.toLowerCase())){
  //     return this.setState({ gearNum: gearNum++ )}
  //   }
  // }

  render() {
    let {
      openStart,
      openEnd,
      closedStart,
      closedEnd,
      addAdminFirst,
      addAdminLast,
      addGearType,
      addGearCondition,
      addGearDescription,
      gearList,
      findGearType,
      findGearCon
    } = this.state;

    let gearCard = gearList.map((element, index) => {
      if (
        element.gear_type.toLowerCase().includes(findGearType.toLowerCase()) &&
        element.gear_condition.toLowerCase().includes(findGearCon.toLowerCase())
      )
        return (
          <div className="gearcard" key={element.id}>
            <div className="gearnamecon">
              <div
                className="gearname"
                onClick={() => this.deleteGearHandler(element.id)}
              >
                {element.gear_type}
                <span className="tooltiptext">delete</span>
              </div>
              <div className="gearcon">{element.gear_condition}</div>
            </div>
            <div className="geardesc">{element.gear_description}</div>
          </div>
        );
    });

    return (
      <div className="">
        <div className="adminPageTitle">administration page</div>
        <div className="adminTotal">
          <div className="inputsideTotal">
            <div className="adminBook ">
              {/* <div className="changeSchedule bo">change schedule</div> */}
              <div className="adminTitle">open to book</div>
              <div className="bookSection">
                <input
                  className=""
                  placeholder="Beginning Date"
                  type="date"
                  value={openStart}
                  onChange={e => {
                    this.setState({ openStart: e.target.value });
                  }}
                />
                <input
                  className=""
                  placeholder="Ending Date"
                  type="date"
                  value={openEnd}
                  onChange={e => {
                    this.setState({ openEnd: e.target.value });
                  }}
                />
                <button
                  className="adminButton"
                  onClick={() =>
                    this.openSubmit("Available", openStart, openEnd)
                  }
                >
                  SUBMIT
                </button>
              </div>
              <div className="bookSection">
                <div className="adminTitle">closed to book</div>
                <input
                  className=""
                  placeholder="Beginning Date"
                  value={closedStart}
                  type="date"
                  onChange={e => {
                    this.setState({ closedStart: e.target.value });
                  }}
                />
                <input
                  className=""
                  placeholder="Ending Date"
                  value={closedEnd}
                  type="date"
                  onChange={e => {
                    this.setState({ closedEnd: e.target.value });
                  }}
                />
                <button
                  className="adminButton"
                  onClick={() =>
                    this.closedSubmit("Reserved", closedStart, closedEnd)
                  }
                >
                  SUBMIT
                </button>
              </div>
            </div>
            <div className="bookSection">
              <div className="adminTitle">add admin</div>
              <input
                className=""
                placeholder="First Name"
                value={addAdminFirst}
                onChange={e => {
                  this.setState({ addAdminFirst: e.target.value });
                }}
              />
              <input
                className=""
                placeholder="Last Name"
                value={addAdminLast}
                onChange={e => {
                  this.setState({ addAdminLast: e.target.value });
                }}
              />
              <button
                className="adminButton"
                onClick={() =>
                  this.addAdminSubmit("true", addAdminFirst, addAdminLast)
                }
              >
                SUBMIT
              </button>
            </div>
            <div className="bookSection">
              <div className="adminTitle">add gear</div>
              <div className="gearTopBottom bookSection">
                <div className="gearConInput">
                  <input
                    className=""
                    placeholder="Gear Type"
                    value={addGearType}
                    onChange={e => {
                      this.setState({ addGearType: e.target.value });
                    }}
                  />
                  <input
                    className=""
                    placeholder="Condition - new/fair/old"
                    value={addGearCondition}
                    onChange={e => {
                      this.setState({ addGearCondition: e.target.value });
                    }}
                  />
                </div>
                <div className="gearConInput">
                  <textarea
                    className="gearta"
                    placeholder="Description"
                    value={addGearDescription}
                    rows="5"
                    onChange={e => {
                      this.setState({ addGearDescription: e.target.value });
                    }}
                  />
                  <button
                    className="adminButton"
                    onClick={() =>
                      this.addGearSubmit(
                        addGearType,
                        addGearCondition,
                        addGearDescription
                      )
                    }
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
            <div className="bookSection">
              <div className="adminTitle">find gear</div>
              <div className="gearTopBottom bookSection">
                <div className="gearConInput">
                  <input
                    className=""
                    placeholder="Gear Type"
                    value={findGearType}
                    onChange={e => {
                      this.setState({ findGearType: e.target.value });
                    }}
                  />
                  <input
                    className=""
                    placeholder="Condition"
                    value={findGearCon}
                    onChange={e => {
                      this.setState({ findGearCon: e.target.value });
                    }}
                  />

                  <button
                    className="adminButton"
                    onClick={() =>
                      this.setState({ findGearCon: "", findGearType: "" })
                    }
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="calGear">
            <div className="calDiv">
              <MyCalendar />
            </div>
            <div>
              <div className="gearTitleDivContainer">
                <div className="adminGearTitle">gear</div>
                {gearCard}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
