import React from "react";
import "./FilterControls.scss";
const FilterControls = (props) => {
	const btnsData = [
		{ name: "Brazil", label: "Brazil" },
		{ name: "Kenya", label: "Kenya" },
		{ name: "Columbia", label: "Columbia" },
	];
	return (
		<>
			<label className="filter__search">
				<div className="filter__seach_text">Lookiing for</div>
				<input
					onChange={(e) => props.onUpdateSearch(e.target.value)}
					type="text"
					placeholder="start typing here..."
					className="filter__search_input"
				/>
			</label>
			<label className="filter__btns">
				<div className="filter__text">Or filter</div>
				{btnsData.map((button) => (
					<button className="filter-btn" onClick={() => props.onFilterSelect(button.label)} key={button.name}>
						{button.label}
					</button>
				))}
			</label>
		</>
	);
};
export default FilterControls;
