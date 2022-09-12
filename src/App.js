//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
//import Menu from "./components/pages/Menu";
import NavBar from "./components/pages/NavBar";
import Instructions from "./components/pages/Instructions";
import Game from "./components/pages/Game";
import "./index.css";

function App () {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Instructions">
          <Instructions />
        </Route>
        <Route exact="/">
          <Game />
        </Route>
      </Switch>
    </div>
  ); 
}

export default App;