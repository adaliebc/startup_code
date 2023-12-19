
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Home';
import BlogPage from './blog/BlogPage';
import ShopPage from './shop/ShopPage';
import ContactPage from './contact/ContactPage';
import Faq from './faq/Faq';
import LoginPage from './login/LoginPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/faq" component={Faq} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
