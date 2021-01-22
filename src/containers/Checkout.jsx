import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { useHistory, Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart, addTotal } = useContext(AppContext);
  const { cart } = state;
  const history = useHistory();

  const handleRemove = (product, index) => () => {
    removeFromCart(product, index);
  };

  const handleSum = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.product_price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handleClick = () => {
    const total = handleSum();
    addTotal(total);
    history.push('/checkout/information');
  };

  return (
    <>
      <div className="Checkout CurrentRoute">
        <div className="Checkout-payment-info">
          {cart.length > 0 ? (
            <div className="Checkout-payment-void">
              <h2>Subtotal: {handleSum()}</h2>
              <div>
                <button
                  type="button"
                  className="long button"
                  onClick={handleClick}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          ) : (
            <h3>Shopping Cart Empty</h3>
          )}
        </div>
        <div className="Checkout-items">
          {cart.length > 0 ? (
            <h3>Products added:</h3>
          ) : (
            <section>
              <div className="Checkout-payment-info">
                <Link to="/">
                  <button type="button" className="long button">Go to Add products!</button>
                </Link>
              </div>
            </section>
          )}
          {cart.map((item, index) => (
            <div key={nanoid()} className="Checkout-item-container">
              <div className="Checkout-item-content">
                <figure className="Checkout-item-figure">
                  <img src={item.product_url} alt={item.product_name} />
                </figure>
                <div className="Checkout-item-info">
                  <h3>{item.product_name}</h3>
                  <h3>{item.product_price}</h3>
                  <h3>{item.product_brand}</h3>
                </div>
              </div>
              <div>
                <button
                  className="button remove"
                  type="button"
                  onClick={handleRemove(item, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
