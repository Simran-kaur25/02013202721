// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.productName}</h5>
        <span className={`px-3 py-1 text-sm text-${product.availability === 'yes' ? 'green' : 'red'}-800 bg-${product.availability === 'yes' ? 'green' : 'red'}-200 rounded-full`}>
          {product.availability}
        </span>
      </div>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
    </div>
  );
};

export default ProductCard;
