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
import './App.css';
function App() {
  return (
    <div className="App">
          <VideoContainer />
      <Header />
          
        <Switch>
          <Route exact path="/" component={Home}> Home
          <SearchBar />
          </Route>
          <Route path="/MyAlarm" component={MyAlarm} />
          <Route path="/weather" component={MyPlaylist} />
        </Switch>
    </div>
  );
}

export default App;
