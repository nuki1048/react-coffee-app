import React from "react";
import ProductItem from "../productItem/ProductItem";
import "./ProductWrapper.scss";
const ProductWrapper = ({ product }) => {
	return (
		<div className="product-wrapper">
			{product.map((item) => {
				const { path, price, name, id } = item;
				return <ProductItem id={id} path={path} price={price} name={name} key={id} />;
			})}
		</div>
	);
};

export default ProductWrapper;
// TODO Цей компонент взагалі краще всього видалити та іспользувати product.map в Home.jsx щоб тупо було легче
