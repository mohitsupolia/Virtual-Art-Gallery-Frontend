import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, description, image } = product;

  return (
    <div className="bg-black w-72 mx-4 mb-8">
      <div className="border-2 border-customGreen rounded-lg overflow-hidden transition-transform duration-300 ease-in cursor-pointer hover:translate-y-[-10px]">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
        <div className="px-6 py-5">
          <h2 className="text-white text-lg font-bold mb-2">{name}</h2>
          <p className="text-white text-sm mb-2">{description}</p>
          <p className="text-lg font-bold text-orange-500">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

