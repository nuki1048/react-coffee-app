import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import Store from "../../components/store/Store";
import Footer from "../../components/footer/Footer";
import Spinner from "../../components/spinner/Spinner";
import useFirebase from "../../services/firebase";

export const Pleasure = () => {
	const { getData, loading } = useFirebase();

	const [data, setData] = useState([]);

	useEffect(() => {
		onRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onRequest = () => {
		getData().then(onDataLoaded);
	};

	const onDataLoaded = (newData) => {
		setData(newData);
	};
	const spinner = loading ? (
		<div className="store-wrapper">
			<Spinner />
		</div>
	) : null;
	const view = !loading ? <Store storeItem={data} /> : null;
	return (
		<div>
			<Header tittle={"For your pleasure"} path={"img/pleasure_bg.jpg"} />
			<AboutComponent title={"About our goods"} path={"img/pleasurePhoto.jpg"} />
			<hr style={{ width: "240px", marginTop: "60px" }} />
			{spinner}
			{view}
			<Footer />
		</div>
	);
};

export default Pleasure;
