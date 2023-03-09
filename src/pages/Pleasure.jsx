import React from "react";
import Header from "../components/Header/Header";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import Store from "../components/Store/Store";
import Footer from "../components/Footer/Footer";
import db from "../db.json";
export const Pleasure = () => {
	const storeItem = JSON.parse(JSON.stringify(db.store));
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
