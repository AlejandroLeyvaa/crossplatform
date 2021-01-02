import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Item from '../containers/Item';
import Layout from '../components/Layout';

import '../assets/styles/mobile.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={Item} />
    </Layout>
  </BrowserRouter>
);


export default App;
