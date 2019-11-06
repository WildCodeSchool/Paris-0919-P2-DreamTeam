import React from "react";
import { geolocated } from "react-geolocated";
import GeolocTrue from "./GeolocTrue"
import GeolocFalse from "./GeolocFalse"
import './Weather.css'
class Geoloc extends React.Component {
  render() {
    if (this.props.coords) {
      import('./WeatherTrue.css')
    }
    return !this.props.isGeolocationAvailable ? (
      <div id="weather" className="default"><div id="weather__container"><div className="weather__info">Your browser does not support Geolocation</div></div></div>
    ) : !this.props.isGeolocationEnabled ? (
      <GeolocFalse>{console.log('Geolocation is not enabled')}</GeolocFalse>
    ) : this.props.coords ? (
      <GeolocTrue lat={this.props.coords.latitude} lon={this.props.coords.longitude} />
    ) : (
            <div id="weather" className="default"><div id="weather__container"><div className="weather__info">Getting the location data&hellip; </div></div></div>
          );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 999999,
})(Geoloc);
