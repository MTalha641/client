import React from 'react';
import './LakesSection.css'; // Import the CSS file

const LakesSection = () => {
  return (
    <div className="lakes-section">
      <h3>Famous Lakes in Pakistan</h3>
      <div className="lake">
        <img src="" alt="Lake Saif ul Malook" />
        <p>Lake Saif ul Malook</p>
      </div>
      <div className="lake">
        <img src="url_to_lake_image" alt="Attabad Lake" />
        <p>Attabad Lake</p>
      </div>
      <div className="lake">
        <img src="url_to_lake_image" alt="Shangrila Lake" />
        <p>Shangrila Lake</p>
      </div>
    </div>
  );
};

export default LakesSection;
