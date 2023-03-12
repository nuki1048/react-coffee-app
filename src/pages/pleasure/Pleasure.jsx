import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import Store from "../../components/store/Store";
import Footer from "../../components/footer/Footer";

import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
export const Pleasure = () => {
	const dataCollection = collection(db, "store");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getData = async () => {
		setLoading(true);
		try {
			const data = await getDocs(dataCollection);
			const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			onDataLoaded(filteredData);
		} catch (error) {}
	};

	const onDataLoaded = (newData) => {
		setLoading(false);
		setData((data) => [...data, ...newData]);
	};

	return (
		<div>
			<Header tittle={"For your pleasure"} path={"img/pleasure_bg.jpg"} />
			<AboutComponent title={"About our goods"} path={"img/pleasurePhoto.jpg"} />
			<hr style={{ width: "240px", marginTop: "60px" }} />
			<Store storeItem={data} loading={loading} />
			<Footer />
		</div>
	);
};

export default Pleasure;
