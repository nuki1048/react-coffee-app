import React from "react";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import Best from "../components/Best/Best";
import Footer from "../components/Footer/Footer";
import Promo from "../components/Promo/Promo";
import db from "../db.json";
const Home = () => {
	const database = JSON.parse(JSON.stringify(db.product));
	return (
		<div>
			<Promo />
			<AboutComponent title={"About Us"} />
			<Best product={database} />
			<Footer />
		</div>
	);
};

export default Home;
