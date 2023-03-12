import React from "react";
import "./ProductItem.scss";
const ProductItem = ({ path, name, price }) => {
	return (
		<div className="product-item">
			<img src="img/cards_preview/cofffee-presto.png" alt="" />
			<h3 className="product-info">{name}</h3>
			<div className="product-price">{price}$</div>
		</div>
	);
};

ProductItem.propTypes = {};

export default ProductItem;
