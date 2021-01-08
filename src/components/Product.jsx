import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addTo }) => {
  return (
    <div className="Products-items">
      <Link to="/product/:id">
        <figure className="Products-items-figure">
          <picture>
            <img src={product.product_url} alt={product.product_name} />
          </picture>
        </figure>
      </Link>
      <div className="Products-item-info">
        <h2 className="Prodcuts-info-title">
          {product.product_name}
        </h2>
        <h3 className="Prodcuts-info-price">
          {product.product_price}
        </h3>
        <div className="Prodcuts-info-brand">
          <span>{product.product_brand}</span>
          <button
            type="button"
            onClick={addTo(product)}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;