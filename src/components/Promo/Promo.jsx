import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import "./Promo.scss";
const SectionPromo = (props) => {
	// TODO Цей компонетн потрібно передивитись, ящко юзатєтся тільки в Home.jsx, то видалити та добавити цей код туди( не як компонент )
	return (
		<section className="section-promo">
			<Container>
				<h1 className="promo-tittle">Everything You Love About Coffee</h1>
				<h2 className="promo-info">
					We makes every day full of energy and taste
					<br />
					Want to try our beans?
				</h2>
				<Link to={"ourCoffee"} className="promo-btn">
					More
				</Link>
			</Container>
		</section>
	);
};

export default SectionPromo;
