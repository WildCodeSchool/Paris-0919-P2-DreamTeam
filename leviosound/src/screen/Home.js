import React from "react";
import Image from "./oxygen.png"
import Geoloc from "../components/Geoloc";
// import Form from "../components/Form"



import './Home.css';

const styles = {
  coversContainer: {
    backgroundImage: `url(${Image})`
  }
};

const Home = () => {
  return (
    <div class="container1">
      <div class="musicplayer">Music Player</div>
      <div class="covers" style={styles.coversContainer}> Album Covers </div>

      {/* <div class="feature">Feature</div> */}
      <div class="geolocation">
        {/* <Form /> */}
        <Geoloc />
      </div>
      {/* <div class="feature">Feature</div> */}
     
    </div>
  );
};

export default Home;
