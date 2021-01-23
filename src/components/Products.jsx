import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';

const Products = () => {
  const { addToCart, setProductInRoute } = useContext(AppContext);
  const [products, setproducts] = useState([]);
  // const API = 'http://localhost:3001/api/products';
  const API = 'https://cross-platform.herokuapp.com/api/products';

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  const handleProductToRoute = (product) => () => {
    setProductInRoute(product);
  };


  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((getData) => {
        setproducts(getData.data);
      });
  }, []);

  return (
    <>
      <div className="Products CurrentRoute grid">
        {products.map((product) => (
          <Product
            key={product.product_id}
            product={product}
            addTo={handleAddToCart}
            setItem={handleProductToRoute}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
