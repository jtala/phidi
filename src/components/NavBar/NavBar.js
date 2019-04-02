import React from "react";
import './NavBar.css';
import Logo from "./images/PhiDiLogo2.png";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <img src={Logo} width='10%' height='100%'/>
      </nav>
    </div>
  );
}

export default NavBar;
