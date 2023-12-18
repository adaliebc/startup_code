// Faq.js

import React from 'react';

const Faq = () => {
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
    <div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <section>
        <h2>Question 1?</h2>
        <p>Answer to question 1.</p>
      </section>
      <section>
        <h2>Question 2?</h2>
        <p>Answer to question 2.</p>
      </section>
      {/* Add more sections for additional questions */}
    </div>
    </div>
  );
};

export default Faq;
