import React from "react";

import Ring from "../components/Ring";

import "./MyAlarm.css";

const MyAlarm = () => {
  return (
    <div className="myalarmcontainer">
      <div className="left"></div>
      <div className="middle">
        <div className="top"></div>
        <Ring />
        <div className="bottom"></div>
      </div>
      <div className="right"></div>
    </div>

      
  );
};

export default MyAlarm;