import React, { Component } from "react";
class Form extends Component {
 
 
 render() {
   return (
     <div id="form">
       <form onSubmit={this.props.getWeather}>
         <input type="text" name="city" placeholder="City..."/>
         <input type="text" name="country" placeholder="Country..."/>
         <button className="buttonWeather">Get Weather</button>
       </form>
     </div>
    
   );
 }
}
export default Form;