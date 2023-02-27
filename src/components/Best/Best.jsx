import { Container } from "@mui/system";
import React from "react";

import "./Best.scss";
import ProductWrapper from "../ProductWrapper/ProductWrapper";
const Best = ({ product }) => {
	return (
		<section className="section-best">
			<Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<h2 className="best-tittle">Our best</h2>
				<ProductWrapper product={product} />
			</Container>
		</section>
	);
};

Best.propTypes = {};

export default Best;
