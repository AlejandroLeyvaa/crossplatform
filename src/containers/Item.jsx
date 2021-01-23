import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Item = () => {
  const { state, addToCart } = useContext(AppContext);
  const { currentProduct } = state;

  const handleAddToCart = () => {
    addToCart(currentProduct);
  };

  return (
    <div className="Item CurrentRoute">
      <figure className="Items-figure">
        <picture>
          <img
            src={currentProduct.product_url}
            alt={currentProduct.product_name}
          />
        </picture>
      </figure>
      <div className="Item-info">
        <h2 className="Item-title">{currentProduct.product_name}</h2>
        <h3 className="Item-price">{currentProduct.product_price}</h3>
        <div className="Item-brand">
          <span>{currentProduct.product_brand}</span>
          <button
            type="button"
            className="long button"
            onClick={handleAddToCart}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
