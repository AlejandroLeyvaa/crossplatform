import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import Item from '../containers/Item';
import CreateProduct from '../containers/CreateProduct';
import Layout from '../components/Layout';

import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';

import '../../static/styles/style.css';


const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route exact path="/add-product" component={CreateProduct} />
            <Route exact path="/product/:id" component={Item} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
