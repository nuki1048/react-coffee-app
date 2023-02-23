import { Container } from "@mui/system";
import React, { useState } from "react";

import "./Best.scss";
import ProductWrapper from "../ProductWrapper/ProductWrapper";
const Best = () => {
	const [product] = useState([
		{ path: "img/cards_preview/coffee-solimo.png", price: "10.73", name: "Solimo Coffee Beans 2 kg", id: 1 },
		{ path: "img/cards_preview/cofffee-presto.png", price: "15.99", name: "Presto Coffee Beans 1 kg", id: 2 },
		{ path: "img/cards_preview/coffee-arabica.png", price: "6.99", name: "AROMISTICO Coffee 1 kg", id: 3 },
	]);
	return (
		<section className="section-best">
			<Container>
				<h2 className="best-tittle">Our best</h2>
				<ProductWrapper product={product} />
			</Container>
		</section>
	);
};

Best.propTypes = {};

export default Best;
