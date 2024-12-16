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

  return (
    <div>
      <div className="bg-light d-flex justify-content-center">
        <div className="scroll-container">
          <span className="text-decoration-none">Deals</span>
          <ul className="dropdown-menu scroll-container h-50 d-flex">
            <div className="" style={{ padding: "10px" }}>
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

            {/* Display Filtered Brands */}
          <div>
          {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <snap className="dropdown-item " key={brand.id} style={{
          display: "flex",
          gridTemplateColumns: "repeat(5, 30px)",
          gap: "10px",
          cursor: "pointer",
        }}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </snap>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </div>
          </ul>
          <span className="text-decoration-none">Brands</span>
          <ul className="dropdown-menu scroll-container h-50">
            <div style={{ padding: "10px" }}>
              {/* Search Input */}
              <input
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
              />
              {/* Alphbates Component */}
              <Alphbates onLetterClick={handleLetterClick} />
            </div>

            {/* Display Filtered Brands */}
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <p className="dropdown-item col-1" key={brand.id}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </p>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </ul>
          <span className="text-decoration-none">Men</span>
          <ul className="dropdown-menu scroll-container h-50">
            <div style={{ padding: "10px" }}>
              {/* Search Input */}
              <input
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
              />
              {/* Alphbates Component */}
              <Alphbates onLetterClick={handleLetterClick} />
            </div>

            {/* Display Filtered Brands */}
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <p className="dropdown-item col-1" key={brand.id}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </p>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </ul>
          <span className="text-decoration-none">Sneaker</span>
          <ul className="dropdown-menu scroll-container h-50">
            <div style={{ padding: "10px" }}>
              {/* Search Input */}
              <input
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
              />
              {/* Alphbates Component */}
              <Alphbates onLetterClick={handleLetterClick} />
            </div>

            {/* Display Filtered Brands */}
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <p className="dropdown-item col-1" key={brand.id}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </p>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </ul>
          <span className="text-decoration-none">Shoes</span>
          <ul className="dropdown-menu scroll-container h-50">
            <div style={{ padding: "10px" }}>
              {/* Search Input */}
              <input
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
              />
              {/* Alphbates Component */}
              <Alphbates onLetterClick={handleLetterClick} />
            </div>

            {/* Display Filtered Brands */}
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <p className="dropdown-item col-1" key={brand.id}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </p>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </ul>
          <span className="text-decoration-none">More Categories</span>
          <ul className="dropdown-menu scroll-container h-50">
            <div style={{ padding: "10px" }}>
              {/* Search Input */}
              <input
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
              />
              {/* Alphbates Component */}
              <Alphbates onLetterClick={handleLetterClick} />
            </div>

            {/* Display Filtered Brands */}
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <p className="dropdown-item col-1" key={brand.id}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </p>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </ul>
          <span className="text-decoration-none">New</span>
          <ul className="dropdown-menu scroll-container h-50">
            <div style={{ padding: "10px" }}>
              {/* Search Input */}
              <input
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
              />
              {/* Alphbates Component */}
              <Alphbates onLetterClick={handleLetterClick} />
            </div>

            {/* Display Filtered Brands */}
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <p className="dropdown-item col-1" key={brand.id}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </p>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </ul><span className="text-decoration-none">Kids</span>
          <ul className="dropdown-menu scroll-container h-50">
            <div style={{ padding: "10px" }}>
              {/* Search Input */}
              <input
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
              />
              {/* Alphbates Component */}
              <Alphbates onLetterClick={handleLetterClick} />
            </div>

            {/* Display Filtered Brands */}
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <p className="dropdown-item col-1" key={brand.id}>
                  <Link className="text-decoration-none" to="#">
                    {brand.attributes.name}
                  </Link>
                </p>
              ))
            ) : (
              <p>No products match your search criteria.</p>
            )}
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Iteam;
