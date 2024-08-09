import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductListingPage = ({ products, onAddToCart, cartItems }) => {
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-listing-page">
      <header>
        <h1>Paradise Nursery
        <Link to="/cart">
          <div className="cart-icon">
            🛒
            <span>{totalItemsInCart}</span>
          </div>
        </Link>
        </h1>
        <p>Your go-to shop for beautiful house plants</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
