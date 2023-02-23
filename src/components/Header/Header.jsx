import React from "react";
import { Container } from "@mui/material";
import "./Header.scss";
const Header = () => {
	return (
		<Container>
			<ul className="header-menu">
				<li className="header-link about">Coffee house</li>
				<li className="header-link coffee">Our coffee</li>
				<li className="header-link pleasure">For your pleasure</li>
			</ul>
		</Container>
	);
};

export default Header;
