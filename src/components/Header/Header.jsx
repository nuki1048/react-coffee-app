import React from "react";
import { Container } from "@mui/material";

import Navbar from "../Navbar/Navbar";
const Header = () => {
	return (
		<Container>
			<Navbar beforeColor={"white"} color={"white"} />
		</Container>
	);
};

export default Header;
