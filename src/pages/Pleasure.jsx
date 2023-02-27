import React, { useState } from "react";
import Header from "../components/Header/Header";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import Store from "../components/Store/Store";
import Footer from "../components/Footer/Footer";
export const Pleasure = () => {
	const [storeItem] = useState([
		{
			img: "img/cards_preview/coffee-arabica.png",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: "6.99",
			id: 1,
		},
		{
			img: "img/cards_preview/coffee-arabica.png",
			name: "AROMISTICO Coffee 1 kg",
			country: "Kenya",
			price: "6.99",
			id: 2,
		},
		{
			img: "img/cards_preview/coffee-arabica.png",
			name: "AROMISTICO Coffee 1 kg",
			country: "Columbia",
			price: "6.99",
			id: 3,
		},
		{
			img: "img/cards_preview/coffee-arabica.png",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: "6.99",
			id: 4,
		},
		{
			img: "img/cards_preview/coffee-arabica.png",
			name: "Resto Coffee 1kg",
			country: "Brazil",
			price: "6.99",
			id: 5,
		},
		{
			img: "img/cards_preview/coffee-arabica.png",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: "6.99",
			id: 6,
		},
	]);
	return (
		<div>
			<Header tittle={"For your pleasure"} path={"img/pleasure_bg.jpg"} />
			<AboutComponent title={"About our goods"} path={"img/pleasurePhoto.jpg"} />
			<hr style={{ width: "240px", marginTop: "60px" }} />
			<Store storeItem={storeItem} />
			<Footer />
		</div>
	);
};

export default Pleasure;
