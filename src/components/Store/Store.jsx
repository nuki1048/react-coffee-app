import { Container } from "@mui/system";
import React from "react";

import FilterControls from "../filterControls/FilterControls";

import Spinner from "../spinner/Spinner";
import StoreItem from "../storeItem/StoreItem";

import "./Store.scss";
const Store = ({ storeItem, onFilterSelect, onUpdateSearch, filtersVisible, loading }) => {
	const filters = filtersVisible ? (
		<div className="filter-wrapper">
			<FilterControls onUpdateSearch={onUpdateSearch} onFilterSelect={onFilterSelect} />
		</div>
	) : null;
	return (
		<section className="section-store">
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
		</section>
	);
};

export default Store;
