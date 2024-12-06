import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap
import "./Searchpage.css"; // You can still keep custom styles for additional styling if needed

const Searchpage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Sportswear Club Puffer Jacket Black/White",
      price: 127,
      img: "https://via.placeholder.com/150", // Replace with actual images
    },
    {
      id: 2,
      name: "Nike Sportswear x Central Cee Syna World Tech Fleece",
      price: 259,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Nike Kobe 8 Protro College Navy",
      price: 143,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Nike x NOCTA Sunset Puffer Jacket Mica Green",
      price: 325,
      img: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3">
          <div className="sidebar">
            <h5>Xpress Ship</h5>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>

            <h5>Available Now</h5>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>

            <div className="filter-category">
              <h5>Category</h5>
              <h5>Brands</h5>
              <h5>Gender</h5>
              <h5>Color</h5>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2>
            Browse <strong>10000+ results</strong> for "nike"
          </h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3" key={product.id}>
                <div className="product-card">
                  <img src={product.img} alt={product.name} className="img-fluid" />
                  <h6>{product.name}</h6>
                  <p>Lowest Ask</p>
                  <strong>${product.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
