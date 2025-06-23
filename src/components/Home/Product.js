import React from "react";

const Product = ({ image, title, price }) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p className="title">{title}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default Product;
