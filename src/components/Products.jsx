import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const [products, setproducts] = useState([]);
  const API = 'http://localhost:3001/api/products';

  const handleAddToCart = (product) => () => {
    console.log('Product', product);
    console.log('State', state);
    addToCart(product);
    console.log('State', state);
  };

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((getData) => setproducts(getData.data));
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product
          key={product.product_id}
          product={product}
          addTo={handleAddToCart}
        />
      ))}
    </>
  );

};

export default Products;