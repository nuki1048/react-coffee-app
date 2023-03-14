import { useEffect, useState } from "react";
import AboutComponent from "../../components/aboutComponent/AboutComponent";

import Footer from "../../components/footer/Footer";
import Promo from "../../components/promo/Promo";
import { Container } from "@mui/material";
import ProductItem from "../../components/productItem/ProductItem";

import useFirebase from "../../services/firebase";

import "./Home.scss";
import Spinner from "../../components/spinner/Spinner";
const Home = () => {
	const [data, setData] = useState([]);

	const { dataCollectionBest, getData, loading } = useFirebase();

	useEffect(() => {
		onRequest();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onRequest = async () => {
		getData(dataCollectionBest).then(onDataLoaded);
	};

	const onDataLoaded = (newData) => {
		setData(newData);
	};
	const renderItems = (arr) => {
		const items = arr.map((item) => {
			const { path, price, name, id } = item;
			return <ProductItem id={id} path={path} price={price} name={name} key={id} />;
		});
		return <div className="product-wrapper">{items}</div>;
	};
	const items = renderItems(data);
	const view = !loading ? items : null;
	const spinner = loading ? <Spinner /> : null;

	return (
		<div>
			<Promo />
			<AboutComponent title={"About Us"} />
			<section className="section-best">
				<Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<h2 className="best-tittle">Our best</h2>
					{view}
					{spinner}
				</Container>
			</section>

			<Footer />
		</div>
	);
};

export default Home;
