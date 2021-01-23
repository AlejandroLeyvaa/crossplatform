import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import logo from '../../static/logo.png';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <>
      <header className="Header">
        <div className="Header-logo">
          <Link to="/">
            <figure className="Header-logo-container">
              <img src={logo} alt="crossplatform logo" />
            </figure>
            <h2>CrossPlatform</h2>
          </Link>
        </div>
        <nav className="Header-nav">
          <div className="Header-cart-container">
            <Link to="/checkout">
              <i className="fas fa-shopping-cart" />
            </Link>
          </div>
          {cart.length > 0 && (
            <div>
              <h2>{cart.length}</h2>
            </div>
          )}
          <div className="Header-user-container">
            <Link to="/sign-up">
              <i className="fas fa-user-circle" />
            </Link>
          </div>
        </nav>
      </header>
      <ul className="Header-user-options">
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </>
  );
};

export default Header;
