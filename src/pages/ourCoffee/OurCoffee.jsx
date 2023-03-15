import { useState, useEffect, useTransition, Suspense } from "react";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Store from "../../components/store/Store";
// import db from "../db.json";
// import { collection, getDocs } from "firebase/firestore";

import useFirebase from "../../services/firebase";

import Spinner from "../../components/spinner/Spinner";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const OurCoffee = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("All");
	const [term, setTerm] = useState("");
	const [isPending, startTransition] = useTransition();

	const { getData, loading, error } = useFirebase();

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

	const filterPost = (items, filter) => {
		switch (filter) {
			case "Brazil":
				return items.filter((item) => item.country === "Brazil");
			case "Kenya":
				return items.filter((item) => item.country === "Kenya");
			case "Columbia":
				return items.filter((item) => item.country === "Columbia");
			default:
				return items;
		}
	};

	const onFilterSelect = (filter) => {
		setFilter(filter);
	};

	const searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	const onUpdateSearch = (term) => {
		startTransition(() => {
			setTerm(term);
		});
	};
	const visibleData = filterPost(searchEmp(data, term), filter);
	const spinner =
		loading || isPending ? (
			<div className="store-wrapper">
				<Spinner />
			</div>
		) : null;
	const view = !loading ? (
		<Store
			onUpdateSearch={onUpdateSearch}
			storeItem={visibleData}
			onFilterSelect={onFilterSelect}
			filtersVisible={true}
		/>
	) : null;
	const errorMessage = error ? <ErrorMessage /> : null;
	return (
		<>
			<Header tittle={"Our Coffee"} path={"img/second_main_bg.jpg"} />
			<AboutComponent title={"About our beans"} path={"img/aboutPhoto.jpg"} />
			<hr style={{ width: "240px", marginTop: "60px" }} />
			<ErrorBoundary>{view}</ErrorBoundary>
			{spinner}

			{errorMessage}
			<Footer />
		</>
	);
};

export default OurCoffee;
