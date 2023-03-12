import { Container } from "@mui/system";
import React from "react";

import FilterBtns from "../bilterBtns/FilterBtns";
import FilterSearch from "../filterSearch/FilterSearch";
import Spinner from "../spinner/Spinner";
import StoreItem from "../storeItem/StoreItem";

import "./Store.scss";
const Store = ({ storeItem, onFilterSelect, onUpdateSearch, filtersVisible, loading }) => {
	const filters = filtersVisible ? (
		<div className="filter-wrapper">
			<FilterSearch onUpdateSearch={onUpdateSearch} />
			<FilterBtns onFilterSelect={onFilterSelect} />
		</div>
	) : null;
	return (
		<Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			{filters}
			<div className="store-wrapper">
				{loading ? (
					<Spinner />
				) : (
					storeItem.map((item) => (
						<StoreItem
							id={item.id}
							img={item.img}
							name={item.name}
							country={item.country}
							price={item.price}
							key={item.id}
						/>
					))
				)}
			</div>
		</Container>
	);
};

export default Store;
