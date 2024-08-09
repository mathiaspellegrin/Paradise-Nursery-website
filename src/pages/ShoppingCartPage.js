import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const ShoppingCartPage = ({ cartItems, onIncrease, onDecrease, onRemove }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to handle Checkout button click
  const handleCheckout = () => {
    window.alert('Coming soon');
  };

  return (
    <div className="shopping-cart-page">
      <header>
        <h1>Paradise Nursery</h1>
        <div className="cart-summary">
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
        </div>
      </header>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} />
        ))}
      </div>
      <div className="cart-actions">
        <Link to="/products">
          <button className="checkout-button">Continue Shopping</button>
        </Link>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
