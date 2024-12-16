import React, { useState, useEffect } from "react";
import { getAllStarships } from "../services/sw-api";
import StarshipCard from "../components/StarshipCard";

function StarshipsPage() {
  const [starships, setStarships] = useState([]); // State for fetched starships
  const [error, setError] = useState(null); // State for errors

  // Fetch starships when the page loads
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllStarships();
        setStarships(data.results || []);
      } catch (err) {
        setError("No starships for you (╯°□°）╯︵ ┻━┻");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1>Star Wars Starships</h1>

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      {/* Render starships */}
      <div className="card-container">
        {starships.map((ship, index) => (
          <StarshipCard key={index} name={ship.name} />
        ))}
      </div>
    </div>
  );
}

export default StarshipsPage;

//
