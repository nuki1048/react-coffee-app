import { Container } from "@mui/system";
import React from "react";
import StoreItemWrapper from "../StoreItemWrapper/StoreItemWrapper";
import FilterBtns from "../FilterBtns/FilterBtns";
import FilterSearch from "../FilterSearch/FilterSearch";
import "./Store.scss";
const Store = ({ storeItem, onFilterSelect }) => {
	return (
		<section className="section-store">
			<Container>
				<div className="filter-wrapper">
					<FilterSearch />
					<FilterBtns onFilterSelect={onFilterSelect} />
				</div>
				<StoreItemWrapper storeItem={storeItem} />
			</Container>
		</section>
	);
};

export default Store;
