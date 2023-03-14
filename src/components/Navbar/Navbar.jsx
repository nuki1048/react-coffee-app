import React from "react";
// import { Container } from "@mui/material";
import "./Navbar.scss";
import { NavLink, Outlet } from "react-router-dom";
const Root = ({ color, beforeColor }) => {
	let navMenuColor = color === "black" ? "navbar-link black" : "navbar-link white";
	let beforeNavIconColor = beforeColor === "black" ? "about_black" : "about_white";
	return (
		<div>
			<nav className="navbar">
				<NavLink end to="/" className={`${navMenuColor} ${beforeNavIconColor}`}>
					Coffee house
				</NavLink>
				<NavLink to="ourCoffee" className={navMenuColor}>
					Our coffee
				</NavLink>
				<NavLink end to="pleasure" className={navMenuColor}>
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
