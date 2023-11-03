// Navbar.js

import React from 'react';
import './Navbar.css'; // Make sure to create this CSS file for styling

const Navbar = () => {

  const handleClick = () => {
    // Define the functionality for the click event here
    console.log('Button clicked');
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <button onClick={handleClick} className="link-button">Link 1</button>
        </li>
        <li>
          <button onClick={handleClick} className="link-button">Link 2</button>
        </li>
        <li>
          <button onClick={handleClick} className="link-button">Link 3</button>
        </li>
        {/* Add more placeholder buttons as needed */}
      </ul>
    </div>
  );
};

export default Navbar;
