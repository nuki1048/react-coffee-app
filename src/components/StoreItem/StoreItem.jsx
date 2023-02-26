import React from "react";
import "./StoreItem.scss";
const StoreItem = ({ country, name, price, img }) => {
	return (
		<div className="store-item">
			<img src={img} alt={country} />
			<h3 className="store-item_name">{name}</h3>
			<div className="store-item_sort">{country}</div>
			<div className="store-item_price">{price}$</div>
		</div>
	);
};

export default StoreItem;
