import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <img className='product-size' src={product.thumbnail} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}$</p>
      <button onClick={handleAddToCart} disabled={added}>
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
