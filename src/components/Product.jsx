import React from 'react';
import { Link } from 'react-router-dom';
import imageProduct from '../assets/3DS/video-game-console-2202582_640.jpg';

const Product = () => {
  let some = [];
  return (
    <Link to="/product/id">
      <div className="Products-items">
        <figure className="Products-items-figure">
          <picture>
            <img src={imageProduct} alt="" />
          </picture>
        </figure>
        <div className="Products-item-info">
          <h2 className="Prodcuts-info-title">
            Product Name
          </h2>
          <h3 className="Prodcuts-info-price">
            Price
          </h3>
          <div className="Prodcuts-info-rank">
            <span>Stars</span>
          </div>
          <div className="Prodcuts-info-brand">
            <span>Nintendo</span>
            <button type="button">Buy</button>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default Product;