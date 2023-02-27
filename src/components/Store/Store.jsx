import { Container } from "@mui/system";
import React from "react";
import StoreItemWrapper from "../StoreItemWrapper/StoreItemWrapper";
import FilterBtns from "../FilterBtns/FilterBtns";
import FilterSearch from "../FilterSearch/FilterSearch";
import "./Store.scss";
const Store = ({ storeItem, onFilterSelect, onUpdateSearch, filtersVisible }) => {
	const filters = filtersVisible ? (
		<div className="filter-wrapper">
			<FilterSearch onUpdateSearch={onUpdateSearch} />
			<FilterBtns onFilterSelect={onFilterSelect} />
		</div>
	) : (
		<div></div>
	);
	return (
		<section className="section-store">
			<Container>
				{filters}
				<StoreItemWrapper storeItem={storeItem} />
			</Container>
		</section>
	);
};

export default Store;
