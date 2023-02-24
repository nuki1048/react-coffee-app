import React from "react";
import { Container } from "@mui/material";
import "./Promo.scss";
const SectionPromo = (props) => {
	return (
		<section className="section-promo">
			<Container>
				<h1 className="promo-tittle">Everything You Love About Coffee</h1>
				<h2 className="promo-info">
					We makes every day full of energy and taste
					<br />
					Want to try our beans?
				</h2>
				<button className="promo-btn">More</button>
			</Container>
		</section>
	);
};

export default SectionPromo;
