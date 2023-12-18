// Contact.js
import React from 'react';

const ContactPage = () => {
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
        <h1>Contact Us!</h1>
        <p>Here is where I will place the fancy info I need.</p>
      </div>

      {/* Your contact form or additional content goes here */}

      <footer>
        <link rel="stylesheet" href="hf_styles.css" />
        <p>Visit our GitHub repository: <a href="https://github.com/adaliebc/startup" target="_blank">GitHub Repository</a></p>
      </footer>
    </div>
  );
};

export default ContactPage;
