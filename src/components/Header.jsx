import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  console.log('Cart', cart);

  return (
    <header>
      <div>
        <p>Header</p>
        {cart.length > 0 &&
        <h2>{cart.length}</h2>
        }
      </div>
    </header>
  );
};



export default Header;