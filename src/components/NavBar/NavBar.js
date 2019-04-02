import React from "react";
import './NavBar.css';
import Logo from "./images/PhiDiLogo.png";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-light bg-light">
        <img className="navbar-brand" src={Logo} width='25%'/>
      </nav>
    </div>
  );
}

export default NavBar;
