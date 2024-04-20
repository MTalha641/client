import React from 'react';
import { Link } from 'react-router-dom';
import LakesSection from './LakesSection'; // Import LakesSection component
import './ExplorePakistan.css'
const ExplorePakistan = () => {
  return (
    <div className="explore-pakistan">
      <nav className="explore-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#lakes">Lakes</a></li>
          <li><a href="#hill-stations">Hill Stations</a></li>
          <li><a href="#valleys">Valleys</a></li>
          <li><a href="#beaches">Beaches</a></li>
        </ul>
      </nav>
      <h2>Explore Pakistan</h2>
      <div className="destination-categories">
        <h3 id="lakes">Lakes</h3>
        <LakesSection />
      </div>
    </div>
  );
};

export default ExplorePakistan;
