import React, { Component } from "react";
import cover from "./cover.mp4";
import "./Animate.css"


class Animate extends Component {
  
  render() {
    return (
      <div>
        <video className="videotag" autoPlay loop muted>
          <source src={cover} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Animate;
