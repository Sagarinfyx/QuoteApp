// App.js

import React from 'react';
import './App.css'; // If you have an App.css file for global styles
import Header from './components/Header'; // Import the Header component
import Navbar from './components/Navbar'; // Import the Navbar component
import HomePage from './components/HomePage'; // Import the HomePage component

function App() {
  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <Navbar /> {/* Render the Navbar component */}
      <HomePage /> {/* Render the HomePage component */}
      {/* Add other components and content here */}
    </div>
  );
}

export default App;
