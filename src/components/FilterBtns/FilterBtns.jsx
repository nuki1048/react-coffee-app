import React from "react";
import "./FilterBtns.scss";
const FilterBtns = (props) => {
	const btnsData = [
		{ name: "Brazil", label: "Brazil" },
		{ name: "Kenya", label: "Kenya" },
		{ name: "Columbia", label: "Columbia" },
	];
	return (
		<label className="filter__btns">
			Or filter
			{btnsData.map((button) => (
				<button className="filter-btn" onClick={() => props.onFilterSelect(button.label)} key={button.name}>
					{button.label}
				</button>
			))}
		</label>
	);
};

export default FilterBtns;
