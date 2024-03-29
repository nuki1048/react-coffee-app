import React from "react";
import "./ProductItem.scss";

import img from "../../assets/img/cards_preview/cofffee-presto.png";
const ProductItem = ({ name, price }) => {
  return (
    <div className="product-item">
      <img src={img} alt="" />
      <h3 className="product-info">{name}</h3>
      <div className="product-price">{price}$</div>
    </div>
  );
};

export default ProductItem;
