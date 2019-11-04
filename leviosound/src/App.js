import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header"
import Home from './screen/Home';
import MyPlaylist from './screen/MyPlaylist';
import MyAlarm from './screen/MyAlarm';
import SearchBar from './components/SearchBar';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
          
        <Switch>
          <Route exact path="/" component={Home}> Home
          <SearchBar />
          </Route>
          <Route path="/weather" component={MyPlaylist} />
          <Route path="/MyAlarm" component={MyAlarm} />
        </Switch>
    </div>
  );
}

export default App;
