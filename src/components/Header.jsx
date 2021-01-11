import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header className="Header">
      <div className="Header-logo" />
      <nav className="Header-nav">
        <Link to="/checkout">
          <div>Elements</div>
        </Link>
        {cart.length > 0 && <div><h2>{cart.length}</h2></div>}
      </nav>
    </header>
  );
};



export default Header;