import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <NavLink to="/Instructions">HOW TO PLAY</NavLink>
      <NavLink to="/Game">PLAY GAME</NavLink>
    </div>
  );
}

export default NavBar;