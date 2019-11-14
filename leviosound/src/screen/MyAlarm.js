import React from 'react';

import Ring from '../components/Ring';

import './MyAlarm.css' 

const MyAlarm = () => {
    return (
        <div className="container">

        {/* <div className="menu">My Alarm</div>
        <div className="middle">
        <div className="post pic">POST</div> */}
        <Ring /> 
        {/* <div className="sidebar pic">SIDEBAR</div> */}
        {/* </div> */}
        {/* // <div className="playlistWeather">Weather Playlist Weather</div> */}
      {/* <Ring /> */}

      <div className="play1">Playlist #1</div>
      <div className="middle">
      <div className="post pic">Playlist #2</div>
      <div className="picWeather pic">Weather</div>
      <div className="sidebar pic">Playlist #3</div>
      </div>
      <div className="playlistWeather">Weather Playlist Weather</div>
      {/* <div className="footer">FOOTER</div> */}

    </div>
    )
}

export default MyAlarm