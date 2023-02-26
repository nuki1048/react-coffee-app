import React from "react";
import StoreItem from "../StoreItem/StoreItem";

import "./StoreItemWrapper.scss";
const StoreItemWrapper = ({ storeItem }) => {
	return (
		<div className="store-wrapper">
			{storeItem.map((item) => (
				<StoreItem img={item.img} name={item.name} country={item.country} price={item.price} key={item.id} />
			))}
		</div>
	);
};

export default StoreItemWrapper;
