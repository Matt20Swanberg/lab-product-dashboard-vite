import React, { useState } from 'react';
import ProductList from './components/ProductList';
import styled from '@emotion/styled';
import laptopImage from './assets/laptop.png'
import phoneImage from './assets/phone.png'
import tabletimage from './assets/tablet.png'

// Main application component for the Product Dashboard
const App = () => {

  // Initial mock product data
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true, image: laptopImage },
    { id: 2, name: 'Phone', price: '$699', inStock: false, image: phoneImage },
    { id: 3, name: 'Tablet', price: '$499', inStock: true, image: tabletimage },
  ];

  // State for managing products and active filter selection
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  // Removes a product from the dashboard by ID
  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  // Dynamically filter products based on selected filter
  const filteredProducts =
    filter === 'all'
      ? products
      : filter === "inStock"
        ? products.filter(product => product.inStock)
        : products.filter((product) => !product.inStock)


  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* Filter controls */}
      <p>Filter buttons below</p>
      <button onClick={() => setFilter('inStock')}>
        In stock
      </button>
      <button onClick={() => setFilter('outOfStock')}>
        Out of stock
      </button>
      <button onClick={() => setFilter('all')}>
        All
      </button>

      {/* Render filtered product list */}
      <ProductList products={filteredProducts} onRemoveProduct={handleRemoveProduct} />

    </div>
  );
};

export default App;
