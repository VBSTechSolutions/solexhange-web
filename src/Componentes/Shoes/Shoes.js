import React, { useState } from "react";
import "./Shoes.css";
import { imager } from "../../AboutImage/Allimage";

function Shoes() {
  // Array of images
  const imaagerpass = [
    { pass: imager.Shoes5 },
    { pass: imager.Shoes6 },
    { pass: imager.Shoes7 },
    { pass: imager.Shoes8 },
  ];

  // State to manage button clicks for each card
  const [clickedState, setClickedState] = useState(
    Array(imaagerpass.length).fill(false)
  );

  // Toggle click state for individual cards
  const handleClick = (index) => {
    const newClickedState = [...clickedState];
    newClickedState[index] = !newClickedState[index];
    setClickedState(newClickedState);
  };

  return (
    <div className="container-fluid backcolor">
      <div className="row">
        {imaagerpass.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 py-4">
            <div className="shoe-card">
              {/* Image Rendering */}
              <img
                src={item.pass} // Replace with the correct path to your image
                alt={`Shoes ${index + 1}`}
                className="shoe-image m-2"
              />
              {/* Button */}
              <button
                className={`shoe-btn  ${
                  clickedState[index] ? "clicked" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                Shoes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoes;
