import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.API = 'https://cross-platform.herokuapp.com/api/products';
    console.log('State', this.state);
  }

  // handleAddToCart(product) => () => {
  //   // addToCart(product);

  //   console.log(1);
  // };

  // handleProductToRoute(product) {
  //   // return () => {
  //   //   setProductInRoute(product);
  //   // };
  //   console.log(2);
  // }

  componentDidMount() {
    fetch(this.API)
      .then((response) => response.json())
      .then((getData) => {
        const { data } = getData;
        console.log(data);
        this.setState({ products: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <div className="Products CurrentRoute grid">
          {products.map((product) => (
            <Product
              key={product.product_id}
              product={product}
              // addTo={this.handleAddToCart}
              // setItem={this.handleProductToRoute}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Products;
