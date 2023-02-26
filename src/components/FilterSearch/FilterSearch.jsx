import React from "react";
import "./FilterSearch.scss";
const FilterSearch = (props) => {
	return (
		<label className="filter__search">
			<div className="filter__seach_text">Lookiing for</div>
			<input
				onChange={(e) => props.onUpdateSearch(e.target.value)}
				type="text"
				placeholder="start typing here..."
				className="filter__search_input"
			/>
		</label>
	);
};

export default FilterSearch;
