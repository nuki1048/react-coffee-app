import { Container } from "@mui/material";
import React from "react";
import "./AboutComponent.scss";
const AboutComponent = ({ path, title }) => {
	return (
		<section className="about_component">
			<Container>
				<div className="content_wrapper">
					<img src={path} alt={title} />
					<div className="info-wrapper">
						<h2 className="info__tittle">{title}</h2>
						<p className="info__descrip">
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly
							months do things on at. Situation recommend objection do intention so questions. As greatly removed
							calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
							answered followed. At it went is song that held help face.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default AboutComponent;
