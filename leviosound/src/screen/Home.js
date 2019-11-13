import React from "react";
// import Image from "./tech.jpg"
import Geoloc from "../components/Geoloc";
import MusicPlayer from './MusicPlayer'
// import Form from "../components/Form"



import './Home.css';

// const styles = {
//   coversContainer: {
//     backgroundImage: `url(${Image})`
//   }
// };

const Home = () => {
  return (
    <div class="container1">
      <div class="musicplayer"><MusicPlayer /></div>
      {/* <div class="covers" style={styles.coversContainer}></div> */}

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
