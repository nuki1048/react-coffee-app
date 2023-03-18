import { Container } from "@mui/system";
import React from "react";
import Root from "../root/Root";
import "./Footer.scss";
const Footer = (props) => {
	return (
		<section className="section-footer">
			<Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<Root beforeColor={"black"} color={"black"} />
			</Container>
		</section>
	);
};

export default Footer;
