import React from "react";
import AboutComponent from "../components/About/AboutComponent/AboutComponent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Store from "../components/Store/Store";
const About = () => {
	return (
		<div>
			<Header tittle={"Our Coffee"} path={"img/second_main_bg.jpg"} />
			<AboutComponent title={"About our beans"} path={"img/aboutPhoto.jpg"} />
			<hr style={{ width: "240px", marginTop: "60px" }} />
			<Store />
			<Footer />
		</div>
	);
};

export default About;
