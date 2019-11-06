import React, { Component } from "react";
import cover from "./Live.mp4";
import "./Animate.css"


class Animate extends Component {
  
  render() {
    return (
      <div>
        <video className="videotag" autoPlay loop muted>
          <source src={cover} type="video/mp4" />
        </video>
        <div className="bottom">
          <h1>Hey, Link... Wake up !</h1>
          <p>Music is Magic.</p>
        </div>
      </div>
    );
  }
}

export default Animate;
