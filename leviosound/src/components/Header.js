import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header-nav">
      <p className="titre">LEVIOSOUND</p>
      <div>
        <ul className="header-menu">
          <Link to="/">
            <li className="header-itemMenu" button id="myBtn">Home</li>
          </Link>
          <Link to="/weather">
            <li className="header-itemMenu" button id="myBtn">My Playlist</li>
          </Link>
          <Link to="/MyAlarm">
            <li className="header-itemMenu" button id="myBtn" >My Alarm</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
