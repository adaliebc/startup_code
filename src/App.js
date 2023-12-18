// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Home';
import BlogPage from './components/BlogPage';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import FaqPage from './components/Faq';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/faq" component={FaqPage} />
      </Switch>
    </Router>
  );
};

export default App;
