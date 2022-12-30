import React from "react";

function Expenses() {
  return (
    <div style={{ backgroundColor: "green" }}>
      <div className="food-item">
        <h2 className="food-item-h2">
          Food <span className="food-item-span">RS 10</span>
        </h2>
      </div>
      <div className="petrol-item">
        <h2>Petrol </h2>
        <span>RS- 100</span>
      </div>
      <div className="movie-item">
        <h2>Movies </h2>
        <span>RS- 500</span>
      </div>
    </div>
  );
}

export default Expenses;
