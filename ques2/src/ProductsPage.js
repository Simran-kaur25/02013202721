// src/components/ProductsPage.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts('AMZ', 'Laptop', 10, 1, 10000);
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      {error && <p className="text-red-500">{error}</p>}
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default ProductsPage;
