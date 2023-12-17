import React from 'react';
import SmileyFaceToggle from './SmileyFaceToggle'; // Adjust the path based on your project structure
import { Link } from 'react-router-dom';

const ShopPage = () => {
  return (
    <div className="shop-page-container">
      <h1>Welcome to the Shop!</h1>
      <div className="smiley-face-container">
        <SmileyFaceToggle />
      </div>
      {/* Add more shop content here */}
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ShopPage;
