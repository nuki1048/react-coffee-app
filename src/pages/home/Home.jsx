import { useEffect, useState } from "react";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import Best from "../../components/best/Best";
import Footer from "../../components/footer/Footer";
import Promo from "../../components/promo/Promo";

import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	// TODO Ось тут потрібно зробити загрузку(тимчасову, чисто щоб працювало)
	// TODO Після того як зроблю цей хук з firebase, то виадалити звідси цей стейт

	const dataCollection = collection(db, "best");
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
			<Promo />
			<AboutComponent title={"About Us"} />
			<Best product={data} />
			<Footer />
		</div>
	);
};

export default Home;
