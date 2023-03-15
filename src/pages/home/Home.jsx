import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Promo from "../../components/promo/Promo";
import { Container } from "@mui/material";
import ProductItem from "../../components/productItem/ProductItem";
import AboutComponent from "../../components/aboutComponent/AboutComponent";

import useFirebase from "../../services/firebase";

import "./Home.scss";
import Spinner from "../../components/spinner/Spinner";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
const Home = () => {
	const [data, setData] = useState([]);

	const { dataCollectionBest, getData, loading, error } = useFirebase();

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
	const errorMessage = error ? <ErrorMessage /> : null;
	return (
		<div>
			<Promo />
			<AboutComponent title={"About Us"} />
			<section className="section-best">
				<Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<h2 className="best-tittle">Our best</h2>
					<ErrorBoundary>{view}</ErrorBoundary>
					{spinner}
					{errorMessage}
				</Container>
			</section>

			<Footer />
		</div>
	);
};

export default Home;
