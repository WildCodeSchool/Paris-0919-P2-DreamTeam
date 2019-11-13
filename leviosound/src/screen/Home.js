import React from "react";
import Geoloc from "../components/Geoloc";
import MusicPlayer from './MusicPlayer';
import PlayerCover from './PlayerCover';
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
      <div class="playercover"><PlayerCover /></div>
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
