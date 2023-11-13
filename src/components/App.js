import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUserPlus, BiFilter } from "react-icons/bi";

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="n-wrapper container">
        <div className="n-left">
          <div className="n-name" style={{ fontSize: "15px" }}>
            {" "}
            FE-ASSIGNMENT{" "}
            <span
              style={{
                backgroundColor: "#0055CC",
                padding: "3px",
                margin: "5px",
                paddingTop: "8px",
              }}
            >
              <AiOutlineSetting />{" "}
            </span>{" "}
            <span
              style={{
                backgroundColor: "#0055CC",
                padding: "3px",
                marginLeft: "3px",
              }}
            >
              WorkSpace Visible
            </span>{" "}
            <select
              name="Board"
              id=""
              style={{ padding: "3px", marginLeft: "5px" }}
            >
              <option value="">Board</option>
            </select>
          </div>
        </div>
        <div className="n-right">
          {/* className='n-list' */}
          <div id="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li style={{ backgroundColor: "#0055CC", padding: "3px" }}>
                Power-Ups
              </li>

              <li style={{ backgroundColor: "#0055CC", padding: "3px" }}>
                Automation
              </li>

              <li style={{ backgroundColor: "#0055CC", padding: "3px" }}>
                <BiFilter /> Filter
              </li>

              <li
                style={{
                  borderRadius: "50%",
                  backgroundColor: "black",
                  color: "white",
                  padding: "4px",
                }}
              >
                AE
              </li>
              <li
                style={{
                  backgroundColor: "white",
                  padding: "3px",
                  color: "black",
                }}
              >
                <BiUserPlus />
                Share
              </li>
            </ul>
          </div>

          <button
            className="button n-button"
            style={{ backgroundColor: "#0055CC", padding: "3px" }}
          >
            ...
          </button>

          <div className="moon"></div>
        </div>
      </div>

        <Board />
      </div>
    );
  }
}

export default App;
