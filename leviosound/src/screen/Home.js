import React from "react";
import Image from "./eau.jpg"

import './Home.css';

const styles = {
  coversContainer: {
    backgroundImage: `url(${Image})`
  }
};

const Home = () => {
  return (
    <div class="container1">
      <div class="menu">HOME</div>
      <div class="post" style={styles.coversContainer}> Album Covers </div>
      <div class="sidebar">TODAY'S PLAYLIST</div>
      <div class="sidebar">LYRICS</div>
      <div class="sidebar">ADD NEWS SONGS</div>
      <div class="footer">FOOTER</div>
    </div>
  );
};

export default Home;
