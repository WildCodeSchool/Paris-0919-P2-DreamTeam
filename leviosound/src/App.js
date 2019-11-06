import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Animate from "./screen/Animate"
import Header from "./components/Header"
import Home from './screen/Home';
import MyPlaylist from './screen/MyPlaylist';
import MyAlarm from './screen/MyAlarm';
import './App.css';


function App() {
  return (
    <div className="App">
      <Animate />
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={MyPlaylist} />
          <Route path="/MyAlarm" component={MyAlarm} />
        </Switch> 
    </div>
    
  );
}

export default App;
