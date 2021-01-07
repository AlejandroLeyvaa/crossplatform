import React from 'react';

const Preview = ({ src, name, price, brand }) => (
  <div className="Add-product">
    <figure className="Figure">
      <img src={src} alt="" />
    </figure>
    <p>{name}</p>
    <p>{price}</p>
    <p>{brand}</p>
    <button type="submit" className="Form-input-submit">Delete</button>
  </div>
);

export default Preview;
