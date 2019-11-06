import React, { Component } from "react";
import cover from "./cover.mp4";


class Animate extends Component {
  
  render() {
    return (
      <div>
        <video className="videoTag" autoPlay loop muted>
          <source src={cover} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Animate;
