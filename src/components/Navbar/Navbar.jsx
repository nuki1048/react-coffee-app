import React from "react";
// import { Container } from "@mui/material";
import "./Navbar.scss";
import { NavLink, Outlet } from "react-router-dom";
const Root = ({ color, beforeColor }) => {
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
				<NavLink end to="/" className={aboutClasses}>
					Coffee house
				</NavLink>
				<NavLink to="ourCoffee" className={navbarLink}>
					Our coffee
				</NavLink>
				<NavLink end to="pleasure" className={navbarLink}>
					For your pleasure
				</NavLink>
			</nav>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
