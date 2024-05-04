import React, { useEffect, useState } from 'react';
import './kashmir.css'; // Import CSS for styling

const KashmirTrips = () => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch data from your backend endpoint
  useEffect(() => {
    fetch('/api/trips') // Adjust the endpoint based on your Express.js server
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error('Error fetching trips:', error));
  }, []);

  // Filter trips based on the search input
  const filteredTrips = trips.filter((trip) =>
    trip.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="kashmir">
      <input
        type="text"
        placeholder="Search for a trip..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="trip-list">
        {filteredTrips.map((trip, index) => (
          <div className="trip-card" key={index}>
            <img src={trip.image} alt={trip.title} className="trip-image" />
            <div className="trip-details">
              <h3>{trip.title}</h3>
              <p><strong>Starting Location:</strong> {trip.startLocation}</p>
              <p><strong>Locations Included:</strong> {trip.locations.join(', ')}</p>
              <p><strong>Activities Included:</strong> {trip.activities}</p>
              <p><strong>Starting From:</strong> Rs. {trip.price}</p>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KashmirTrips;
