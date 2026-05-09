import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Card } from '@mui/material';
import ProductList from './ProductList';

// Individual product card component
const ProductCard = ({ product, onRemoveProduct }) => {
  return (
    <div

      // Apply conditional styling for out-of-stock products
      className={
        product.inStock
          ? styles.card
          : `${styles.card} ${styles.outOfStockClass} outOfStockClass`
      }
    >

      {/* Product image */}
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.name}
      />

      {/* Product name */}
      <h3>{product.name}</h3>

      {/* Product price */}
      <p>{product.price}</p>

      {/* Dynamically render stock status text and styling */}
      <p className={
        product.inStock ?
          styles.inStockText :
          styles.outOfStockText}
      >
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      {/* Trigger removal of product from dashboard */}
      <button
        className={styles.removeButton}
        onClick={() => onRemoveProduct(product.id)}>Remove</button>

    </div>
  );
};

export default ProductCard;
