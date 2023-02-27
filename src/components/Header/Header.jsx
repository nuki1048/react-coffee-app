import React from "react";
import "./Header.scss";
const Header = ({ tittle, path }) => {
	return (
		<header style={{ background: `url(${path})` }} className="header">
			<h2 className="header_title">{tittle}</h2>
		</header>
	);
};

export default Header;
