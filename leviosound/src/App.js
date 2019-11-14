import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header"
import Home from './screen/Home';
import MyPlaylist from './screen/MyPlaylist';
import MyAlarm from './screen/MyAlarm';
import VideoContainer from './screen/VideoContainer'
import SearchBar from './components/SearchBar';
import Alarm from './components/Alarm'

import './App.css';

const App = () => {
  return (
    <div className="App">
          <VideoContainer />
      <Header />
          
        <Switch>
          <Route exact path="/" component={Home}> Home
          <SearchBar />
          </Route>
            <Route path="/weather" component={MyPlaylist} />
            <Route path="/MyAlarm" component={MyAlarm} />
            {/* <Route path="/alarm" component={Alarm} /> */}
            {/* <Ring /> */}

          <Route path="/MyAlarm" component={MyAlarm} />
          <Route path="/weather" component={MyPlaylist} />
 
        </Switch>
    </div>
  );
}

export default App;
