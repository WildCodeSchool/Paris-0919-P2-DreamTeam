import React, { Component } from "react";

class VideoContainer extends Component {
 render() {
   return (
     <div>
       <video className="videoTag" autoPlay loop muted>
         <source src="wwww.videvo.net/videvo_files/converted/2014_08/preview/Earth_Zoom_In.mov35908.webm" type="video/mp4" />
       </video>
     </div>
   );
 }
}
export default VideoContainer;