import React from "react";
import "./Productlist.css"; // Optional: Add custom CSS if needed.

const categories = [
  "Sneakers",
  "Apparel",
  "Shoes",
  "Accessories",
  "Collectibles",
  "NFTs",
  "Trading Cards",
  "Electronics",
];

const products = [
  { name: "Nike Kobe 9 Elite Low Protro Halo", price: "$125", img: "path/to/image1.png" },
  { name: "Nike KD 17 NRG Aunt Pearl", price: "$143", img: "path/to/image2.png" },
  { name: "Nike Dunk Low Rose Whisper", price: "$49", img: "path/to/image3.png" },
  { name: "Nike SB Dunk Low Pro White Gum", price: "$72", img: "path/to/image4.png" },
  { name: "Nike Kobe 8 Protro College Navy", price: "$125", img: "path/to/image5.png" },
  { name: "Nike Air VaporMax Plus Triple Black", price: "$143", img: "path/to/image6.png" },
  { name: "Nike Dunk Low Retro White Black Panda", price: "$49", img: "path/to/image7.png" },
  { name: "Nike Zoom Vomero 5 Light Bone Black", price: "$72", img: "path/to/image8.png" },
];

function Productlist() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <h5 className="mb-3">Category</h5>
          <ul className="list-group">
            {categories.map((category, index) => (
              <li key={index} className="list-group-item">
                {category}
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <h5>Brands</h5>
        </div>

        {/* Product Grid */}
     
      </div>
    </div>
  );
}

export default Productlist;
