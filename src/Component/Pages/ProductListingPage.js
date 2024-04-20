import React from "react";
import ProductCard from "./ProductCard";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of product 1",
      price: 19.99,
      image: "./images/first_photo.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2",
      price: 24.99,
      image: "./images/second_image.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of product 3",
      price: 24.99,
      image: "./images/third_image.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of product 4",
      price: 24.99,
      image: "./images/fourth_image.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of product 5",
      price: 24.99,
      image: "./images/fifth_image.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description of product 6",
      price: 24.99,
      image: "./images/sixth_image.jpg",
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description of product 7",
      price: 24.99,
      image: "./images/seventh_image.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div>
      <h1
        style={{ color: "white", textAlign: "center" }}
        className="text-3xl m-2 font-bold"
      >
        Products
      </h1>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
