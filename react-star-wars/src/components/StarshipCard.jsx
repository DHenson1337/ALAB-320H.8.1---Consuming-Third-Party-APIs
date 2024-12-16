import React from "react";
import PropTypes from "prop-types"; // For type-checking props

function StarshipCard({ name }) {
  return (
    <div className="starship-card">
      <h2>{name}</h2>
    </div>
  );
}

//Prop validation for debugging

// Enforce prop types for better debugging
StarshipCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StarshipCard;
