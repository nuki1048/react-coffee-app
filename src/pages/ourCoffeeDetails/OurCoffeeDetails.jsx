import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import { Container } from "@mui/system";

import Header from "../../components/header/Header";

import "./OurCoffeeDetails.scss";
import Spinner from "../../components/spinner/Spinner";

const OurCoffeeDetails = () => {
	const { productId } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState();
	const getData = async () => {
		setLoading(true);
		try {
			const docRef = doc(db, "store", productId);
			const docSnap = await getDoc(docRef);
			onDataLoaded(docSnap.data());
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log("render");
	const onDataLoaded = (data) => {
		setLoading(false);
		setData(data);
	};

	const spinner = loading ? <Spinner /> : null;
	const view = !loading ? <View data={data} /> : null;
	return (
		<>
			<Header tittle={"For your pleasure"} path={"../img/second_main_bg.jpg"} />
			<Container sx={{ marginTop: "70px", width: "865px", display: "flex" }}>
				{spinner} {view}
			</Container>
		</>
	);
};
const View = ({ data }) => {
	return (
		<>
			<img src="../img/coffee-details.jpg" alt="coffee" />
			<div key={0} className="item">
				<h2 className="item__title">About it</h2>
				<div className="item__country">
					<span>Country</span>: {data.country}
				</div>
				<div className="item__description">
					<span>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error fugit
					similique id eaque laboriosam? Aspernatur animi, sunt aut officiis iste adipisci repellendus facere minima,
					cumque unde voluptatem natus. Suscipit.
				</div>
				<div className="item__price">
					Price: <span>{data.price}$</span>
				</div>
			</div>
		</>
	);
};

export default OurCoffeeDetails;
