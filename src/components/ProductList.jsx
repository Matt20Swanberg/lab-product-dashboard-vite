import React from 'react';
import ProductCard from './ProductCard';

// Renders a list of ProductCard components
const ProductList = ({ products, onRemoveProduct }) => {

  // Display fallback message if no products exist
  if (products.length === 0) {
    return <p>No products available!</p>;
  }

  return (
    <div>

      {/* Iterate through products and render ProductCard components */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemoveProduct={onRemoveProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
