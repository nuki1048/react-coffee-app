import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../../components/header/Header";
import useFirebase from "../../services/firebase";
import Spinner from "../../components/spinner/Spinner";
import { Container } from "@mui/system";

import "./OurCoffeeDetails.scss";

const OurCoffeeDetails = () => {
	const { productId } = useParams();
	const [data, setData] = useState({});
	const { getDataId, loading } = useFirebase();
	const getData = async () => {
		getDataId(productId).then(onDataLoaded);
	};
	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onDataLoaded = (data) => {
		setData(data);
	};
	const spinner = loading ? <Spinner /> : null;
	const view = !loading ? <View data={data} /> : null;
	return (
		<section className="our-coffee-details">
			<Header tittle={"Our Coffee"} path={"../img/second_main_bg.jpg"} />
			<Container sx={{ display: "flex", justifyContent: "center" }}>
				{spinner}
				{view}
			</Container>
		</section>
	);
};
const View = ({ data }) => {
	return (
		<div className="item">
			<img src="../img/coffee-details.jpg" alt="coffee" />
			<div key={0} className="item-info">
				<h2 className="item-info__title">About it</h2>
				<div className="item-info__country">
					<span>Country</span>: {data.country}
				</div>
				<div className="item-info__description">
					<span>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error fugit
					similique id eaque laboriosam? Aspernatur animi, sunt aut officiis iste adipisci repellendus facere minima,
					cumque unde voluptatem natus. Suscipit.
				</div>
				<div className="item-info__price">
					Price: <span>{data.price}$</span>
				</div>
			</div>
		</div>
	);
};

export default OurCoffeeDetails;
