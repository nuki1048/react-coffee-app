import React from "react";
import { Link } from "react-router-dom";
import "./StoreItem.scss";
const StoreItem = ({ country, name, price, path, id }) => {
	return (
		<Link to={`/ourCoffee/${id}`} className="store-item">
			<img src="img/cards_preview/coffee-arabica.png" alt={country} />
			<h3 className="store-item_name">{name}</h3>
			<div className="store-item_sort">{country}</div>
			<div className="store-item_price">{price}$</div>
		</Link>
	);
};

export default StoreItem;
