import { useState } from 'react';
import initialState from '../initialState';


const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addUser = (payload) => {
    setState({
      ...state,
      user: Object.assign(state.user, payload)
    });
  };

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

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: Object.assign(state.buyer, payload)
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    });
  };

  const addTotal = (payload) => {
    setState({
      ...state,
      total: payload
    })
  };

  return {
    addUser,
    getProducts,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    addTotal,
    state,
  }
};

export default useInitialState;