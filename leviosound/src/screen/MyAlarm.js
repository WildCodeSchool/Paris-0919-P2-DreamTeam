import React from 'react';
import './MyAlarm.css'

const MyAlarm = () => {
    return (
        <div className="container">
      <div className="menu">My Alarm</div>
      <div className="middle">
      <div className="post pic">POST</div>
      <div className="picWeather pic">Photo Weather</div>
      <div className="sidebar pic">SIDEBAR</div>
      </div>
      <div className="playlistWeather">Weather Playlist Weather</div>
      {/* <div className="footer">FOOTER</div> */}
    </div>
    )
}

export default MyAlarm