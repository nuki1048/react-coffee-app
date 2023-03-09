import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductWrapper.scss";
const ProductWrapper = ({ product }) => {
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
