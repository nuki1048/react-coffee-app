import React, { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductWrapper.scss";
const ProductWrapper = (props) => {
	const [product] = useState([
		{ path: "img/cards_preview/coffee-solimo.png", price: "10.73", name: "Solimo Coffee Beans 2 kg", id: 1 },
		{ path: "img/cards_preview/cofffee-presto.png", price: "15.99", name: "Presto Coffee Beans 1 kg", id: 2 },
		{ path: "img/cards_preview/coffee-arabica.png", price: "6.99", name: "AROMISTICO Coffee 1 kg", id: 3 },
	]);
	return (
		<div className="product-wrapper">
			{product.map((item) => {
				const { path, price, name, id } = item;
				return <ProductItem path={path} price={price} name={name} key={id} />;
			})}
		</div>
	);
};

export default ProductWrapper;
