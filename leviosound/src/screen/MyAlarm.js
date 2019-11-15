import React from "react";

import Ring from "../components/Ring";

import "./MyAlarm.css";

const MyAlarm = () => {
  return (
    <div className="myalarmcontainer">
      <div className="left">Playlist 1</div>
      <div className="middle">
        <div className="top">Playlist 2</div>
        <Ring />
        <div className="bottom">Playlist 4</div>
      </div>
      <div className="right">Playlist 3</div>
    </div>

      
  );
};

export default MyAlarm;