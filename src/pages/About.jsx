import React, { useState } from "react";
import AboutComponent from "../components/About/AboutComponent/AboutComponent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Store from "../components/Store/Store";
const About = () => {
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
			name: "AROMISTICO Coffee 1 kg",
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
	const [filter, setFilter] = useState("All");
	const filterPost = (items, filter) => {
		switch (filter) {
			case "Brazil":
				return items.filter((item) => item.country === "Brazil");
			case "Kenya":
				return items.filter((item) => item.country === "Kenya");
			case "Columbia":
				return items.filter((item) => item.country === "Columbia");
			default:
				return items;
		}
	};
	const onFilterSelect = (filter) => {
		setFilter(filter);
	};
	const visibleData = filterPost(storeItem, filter);
	return (
		<div>
			<Header tittle={"Our Coffee"} path={"img/second_main_bg.jpg"} />
			<AboutComponent title={"About our beans"} path={"img/aboutPhoto.jpg"} />
			<hr style={{ width: "240px", marginTop: "60px" }} />
			<Store storeItem={visibleData} onFilterSelect={onFilterSelect} />
			<Footer />
		</div>
	);
};

export default About;
