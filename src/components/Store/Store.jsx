import { Container } from "@mui/system";
import React from "react";
import StoreItemWrapper from "../StoreItemWrapper/StoreItemWrapper";
import "./Store.scss";
const Store = ({ storeItem }) => {
	return (
		<section className="section-store">
			<Container>
				<div className="filter-wrapper">
					<label className="filter__search">
						<div className="filter__seach_text">Lookiing for</div>
						<input type="text" placeholder="start typing here..." className="filter__search_input" />
					</label>
					<label className="filter__btns">
						Or filter
						<button className="filter-btn">Brazil</button>
						<button className="filter-btn">Kenya</button>
						<button className="filter-btn">Columbia</button>
					</label>
				</div>
				<StoreItemWrapper storeItem={storeItem} />
			</Container>
		</section>
	);
};

export default Store;
