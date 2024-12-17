import React, { useState, useEffect } from "react";
import "./Iteam.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Alphbates from "../Alphbates/Alphbates";

function Iteam() {
  const [brands, setBrands] = useState([]); // Full brand list
  const [filteredBrands, setFilteredBrands] = useState([]); // Filtered brand list
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(""); // Selected letter state
  const [hoveredMenu, setHoveredMenu] = useState(null); // Track hovered menu

  // Fetch all brand data
  useEffect(() => {
    axios
      .get("https://sneakers-rough-frost-7777.fly.dev/brands")
      .then((response) => {
        console.log("Fetched Brands:", response.data);
        setBrands(response.data.data);
        setFilteredBrands(response.data.data); // Default to all brands
      })
      .catch((error) => {
        console.error("Error fetching brand data:", error);
      });
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setFilteredBrands(
      brands.filter((brand) =>
        brand.attributes.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  };

  // Handle alphabet click from Alphbates
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    const filtered = brands.filter((brand) => {
      const brandName = brand.attributes.name || "";
      if (letter === "#") {
        return !/^[A-Z]/i.test(brandName.charAt(0)); // Show non-alphabetic names
      }
      return brandName.charAt(0).toUpperCase() === letter; // Filter brands by letter
    });
    setFilteredBrands(filtered);
  };

  // Handle menu hover
  const handleMenuHover = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMenuLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <div className="w-100">
      <div className="bg-light d-flex justify-content-center higher ">
        <div className="scroll-container">
          {["Deals", "Brands", "Men", "Sneaker", "Shoes", "More Categories", "New", "Kids"].map(
            (menu, index) => (
              <div
                key={index}
                className="menu-item"
                onMouseEnter={() => handleMenuHover(menu)}
                onMouseLeave={handleMenuLeave}
              >
                <span className="text-decoration-none">{menu}</span>
                {hoveredMenu === menu && (
                  <ul className="dropdown-menu scroll-container  d-flex">

                    <div style={{ padding: "10px" }}>
                      {/* Search Input */}
                      {/* <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{
                          padding: "10px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          width: "300px",
                        }}
                      /> */}
                      {/* Alphbates Component */}
                      <Alphbates onLetterClick={handleLetterClick} />
                    </div>
                    <div className="container">
                    <div className="row ">
                    {/* Display Filtered Brands */}
                    
                    {filteredBrands.length > 0 ? (
                      filteredBrands.map((brand) => (
                        <div className="col-lg-2  text-start" style={{}}>
                        <p className="dropdown-item " key={brand.id}>
                          <Link className="text-decoration-none" to="#">
                            {brand.attributes.name}
                          </Link>
                        </p>
                        </div>
                     
                  
                   
                      ))
                    ) : (
                      <p>No products match your search criteria.</p>
                    )}</div>
                    </div>
                  
                  </ul>
                  
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Iteam;
