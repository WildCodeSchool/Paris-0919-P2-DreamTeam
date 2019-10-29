import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header"
import Home from './screen/Home';
import WeatherMusic from './screen/weatherMusic';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={WeatherMusic} />
        </Switch>
    </div>
  );
}

export default App;
