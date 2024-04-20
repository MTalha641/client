import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the search here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <ul>
          <li><Link to="/trips">Trips</Link></li>
          <li><Link to="/explore">Explore Pakistan</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <h1>Welcome to My Tourist Website</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePage; // Export the component
