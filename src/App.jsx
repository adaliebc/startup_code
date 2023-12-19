import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Home';
import BlogPage from './blog/BlogPage';
import ShopPage from './shop/ShopPage';
import ContactPage from './contact/ContactPage';
import FaqPage from './faq/Faq';
import LoginPage from './login/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/login" component={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
