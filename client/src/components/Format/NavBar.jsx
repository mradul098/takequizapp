import React from "react";
import Logo from "./Logo";
import NavBarAuth from "./NavBarAuth";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg">
       
        <NavBarAuth checkLogin={props.checkLogin} onLogout={props.onLogout} />
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
