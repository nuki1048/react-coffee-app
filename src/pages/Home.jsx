import React from "react";
import About from "../components/About/About";
import Best from "../components/Best/Best";
import Footer from "../components/Footer/Footer";
import Promo from "../components/Promo/Promo";
const Home = () => {
	return (
		<div>
			<Promo />
			<About />
			<Best />
			<Footer />
		</div>
	);
};

export default Home;
