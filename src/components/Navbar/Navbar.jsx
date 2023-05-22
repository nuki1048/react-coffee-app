import React from "react";
// import { Container } from "@mui/material";

import { NavLink, Outlet } from "react-router-dom";
const Navbar = ({ color, beforeColor }) => {
  let aboutClasses = "navbar-link about";
  let navbarLink = "navbar-link";
  if (beforeColor === "black") {
    aboutClasses += " about_black";
  } else if (beforeColor === "white") {
    aboutClasses += " about_white";
  }

  if (color === "white") {
    aboutClasses += " white";
    navbarLink += " white";
  } else if (color === "black") {
    aboutClasses += " black";
    navbarLink += " black";
  }
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/react-coffee-app" className={aboutClasses}>
          Coffee house
        </NavLink>
        <NavLink to="about" className={navbarLink}>
          Our coffee
        </NavLink>
        <NavLink to="pleasure" className={navbarLink}>
          For your pleasure
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
