import React from "react";
import "./ProductCard.css"; // Import CSS for styling

const ProductCard = ({ product }) => {
  const { name, price, description, image } = product;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
