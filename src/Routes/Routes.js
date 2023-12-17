// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Adjust the path based on your project structure
import Blog from './components/Blog'; // Adjust the path based on your project structure
import ShopPage from './components/ShopPage'; // Adjust the path based on your project structure

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
