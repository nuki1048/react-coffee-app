import React from "react";
import { Container } from "@mui/material";
import "./Navbar.scss";
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
		<Container>
			<ul className="navbar">
				<li className={aboutClasses}>Coffee house</li>
				<li className={navbarLink}>Our coffee</li>
				<li className={navbarLink}>For your pleasure</li>
			</ul>
		</Container>
	);
};

export default Navbar;
