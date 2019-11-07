import React from "react"
import WeatherDetails from "./WeatherDetails";
import Form from './Form';


const API_KEY = "2d3b5ee080b7d4834734af849cb4b142";

class GeolocFalse extends React.Component {
    state ={
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        main: undefined,
        message: undefined,
        background: "default"
    }

  
   conditionalBackground = () => {
       if (this.state.main === "Clear") {
           this.setState({ background: `clear`})
     } else if (this.state.main === "Rain") {
            this.setState({ background: `rain`})
     } else if (this.state.main === "Clouds") {
            this.setState({ background: `clouds`})
     } else if (this.state.main === "Thunderstorm") {
            this.setState({ background: `thunderstorm`})
     } else if (this.state.main === "Drizzle") {
            this.setState({ background: `drizzle`})
     } else if (this.state.main === "Snow") {
            this.setState({ background: `snow`})
     } else {
            this.setState({ background: `default`})
     }      
   }     



//    classe CSS background y définir les arrières-plans et le style.css //

   componentDidUpdate(prevProps, prevState) {
       if (prevState.city !== this.state.city) {
           this.conditionalBackground()
       }
   }

   getWeather = async (e) => {
       e.preventDefault();
       const city = e.target.elements.city.value;
       const country = e.target.elements.country;
       const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
       const data = await api_call.json();
       console.log(data)
       if (data.cod === "404") {
           this.setState({
               temperature: undefined,
               city: undefined,
               country: undefined,
               humidity: undefined,
               description: undefined,
               error: data.cod,
               message: data.message,
               main: undefined,

           });
       }
       else if ( city && country) {
           this.setState({
               temperature: data.main.temp,
               city: data.name,
               country: data.sys.country,
               humidity: data.main.humidity,
               description: data.weather[0].description,
               error: "",
               message: "",
               main: data.weather[0].main
           });
       }
   }
render() {
    console.log("state", this.state)
    return (
        <div id="weather" className={this.state.background}>
            <Form getWeather={this.getWeather} />
            {this.state.city && this.state.country ?
            <div id="weather__container">
                <WeatherDetails
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                    message={this.state.message}
                />
            </div>
             :   this.state.error ?
            <div id="weather__container"><div className="weather__info">{this.state.message}</div></div>
             : <div id="weather__container"><div className="weather__info">Type your location...</div></div>}
                


        </div>
    )
//  rajouter un formulaire. et une Div qui display les infos dans homepage/menu, effets visuels supplémentaire / samples musicaux sur des retranscriptions audio( audio tracking ) //
}};

export default GeolocFalse;