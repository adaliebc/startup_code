
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="banner">
        <h1 className="site-title">Fiber Art Faerie</h1>
        <div className="menu" id="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="welcome-message">
        <h1>Welcome to Fiber Art Faerie!</h1>
        <p>Discover the magical world of fiber arts and unleash your creativity.</p>
      </div>

      {/* Other content specific to the home page */}
    </div>
  );
};

export default Home;
