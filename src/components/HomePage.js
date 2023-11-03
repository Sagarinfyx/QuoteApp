// HomePage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css'; // Make sure to create this CSS file for styling

const HomePage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/quotes'); // Replace the URL with your Flask API endpoint
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div className="home-page">
      <h2>Quotes</h2>
      <div className="quote-list">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote">
            <p>{quote.text}</p>
            <p>- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
