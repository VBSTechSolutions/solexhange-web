import React from "react";

function Alphbates({ onLetterClick }) {
  // Generate an array of alphabets (A-Z)
  const alphabets = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  return (
    <div style={{ textAlign: "left", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ fontWeight: "bold" }}>All Brands</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 30px)",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        {/* Render the alphabets */}
        {alphabets.map((letter, index) => (
          <span
            key={index}
            onClick={() => onLetterClick(letter)} // Send the selected letter to the parent
            style={{
              fontWeight: "bold",
              color: "black",
              cursor: "pointer",
            }}
          >
            {letter}
          </span>
        ))}
        {/* Add the # symbol */}
        <span onClick={() => onLetterClick("#")} style={{ cursor: "pointer" }}>
          
        </span>
      </div>
    </div>
  );
}

export default Alphbates;
