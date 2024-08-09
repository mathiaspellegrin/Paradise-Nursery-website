import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <div className="quantity-controls">
        <button onClick={() => onDecrease(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item)}>+</button>
      </div>
      <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
