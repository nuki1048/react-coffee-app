import React from "react";
import AboutComponent from "../components/About/AboutComponent/AboutComponent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const About = () => {
	return (
		<div>
			<Header tittle={"Our Coffee"} path={"img/second_main_bg.jpg"} />
			<AboutComponent title={"About our beans"} path={"img/aboutPhoto.jpg"} />
			<hr />
			<Footer />
		</div>
	);
};

export default About;
