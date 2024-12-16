import { useState } from "react";
import { getAllStarships } from "./services/sw-api";
import "./App.css";
import StarshipsPage from "./pages/StarShipsPage";

function App() {
  getAllStarships();
  return (
    <>
      <div>
        <StarshipsPage />
      </div>
    </>
  );
}

export default App;
