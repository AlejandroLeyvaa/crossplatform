import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Item from '../containers/Item';
import CreateProduct from '../containers/CreateProduct';
import Layout from '../components/Layout';

import '../assets/styles/mobile.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-product" component={CreateProduct} />
        <Route exact path="/product/:id" component={Item} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
