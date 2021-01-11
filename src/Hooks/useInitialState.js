import { useState } from 'react';
import initialState from '../initialState';


const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const getProducts = (payload) => {
    setState({
      ...state,
      products: [...state.products, payload],
    });
  };

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((items, currentIndex) => currentIndex !== indexToRemove),
    });
  };

  return {
    getProducts,
    addToCart,
    removeFromCart,
    state,
  }
};

export default useInitialState;