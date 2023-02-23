import React from "react";
import "./ProductItem.scss";
const ProductItem = (props) => {
	return (
		<div className="product-item">
			<img src={props.path} alt="" />
			<h3 className="product-info">{props.name}</h3>
			<div className="product-price">{props.price}$</div>
		</div>
	);
};

ProductItem.propTypes = {};

export default ProductItem;
