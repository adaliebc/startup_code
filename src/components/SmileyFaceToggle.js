// SmileyFaceToggle.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SmileyFaceToggle = () => {
  const [isSmiley, setIsSmiley] = useState(true);

  const toggleExpression = () => {
    setIsSmiley((prevIsSmiley) => !prevIsSmiley);
  };

  return (
    <div>
      <div
        onClick={toggleExpression}
        style={{
          fontSize: '2em',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {isSmiley ? '😊' : '😟'}
      </div>
      <p>{isSmiley ? 'Click to make me sad' : 'Click to make me happy'}</p>
    </div>
  );
};

export default SmileyFaceToggle;
