import React, { useState } from "react";
import AboutComponent from "../components/About/AboutComponent/AboutComponent";
import Best from "../components/Best/Best";
import Footer from "../components/Footer/Footer";
import Promo from "../components/Promo/Promo";

const Home = () => {
	const [product] = useState([
		{ path: "img/cards_preview/coffee-solimo.png", price: "10.73", name: "Solimo Coffee Beans 2 kg", id: 1 },
		{ path: "img/cards_preview/cofffee-presto.png", price: "15.99", name: "Presto Coffee Beans 1 kg", id: 2 },
		{ path: "img/cards_preview/coffee-arabica.png", price: "6.99", name: "AROMISTICO Coffee 1 kg", id: 3 },
	]);

	return (
		<div>
			<Promo />
			<AboutComponent title={"About Us"} />
			<Best product={product} />
			<Footer />
		</div>
	);
};

export default Home;
