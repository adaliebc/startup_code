import React, { useState } from 'react';

const ShopPage = () => {
  // State to manage the color of the heart button
  const [heartColor, setHeartColor] = useState('black');

  // Function to handle the click event and update the color
  const handleHeartClick = () => {
    // Toggle between black and red (or any other colors you prefer)
    setHeartColor(heartColor === 'black' ? 'red' : 'black');
  };

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
      {/* Your shop page content goes here */}
      <div className="welcome-message">
        <h1>Welcome to the Shop!</h1>
        <p>Explore our amazing collection of products.</p>
      </div>

      {/* Heart button with click event */}
      <button
        className="heart-button"
        onClick={handleHeartClick}
        style={{ color: heartColor, fontSize: '120px', border: 'none', background: 'none', cursor: 'pointer' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 512 512">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </button>

      {/* Your shop items and other components go here */}
    </div>
    </div>
  );
};

export default ShopPage;
