import React, { useState } from "react";
import AboutComponent from "../components/About/AboutComponent/AboutComponent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Store from "../components/Store/Store";
const About = () => {
	const [storeItem] = useState([
		{ img: "img/cards_preview/coffee-arabica.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99" },
		{ img: "img/cards_preview/coffee-arabica.png", name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99" },
		{ img: "img/cards_preview/coffee-arabica.png", name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99" },
		{ img: "img/cards_preview/coffee-arabica.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99" },
		{ img: "img/cards_preview/coffee-arabica.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99" },
		{ img: "img/cards_preview/coffee-arabica.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99" },
	]);
	return (
		<div>
			<Header tittle={"Our Coffee"} path={"img/second_main_bg.jpg"} />
			<AboutComponent title={"About our beans"} path={"img/aboutPhoto.jpg"} />
			<hr style={{ width: "240px", marginTop: "60px" }} />
			<Store storeItem={storeItem} />
			<Footer />
		</div>
	);
};

export default About;
