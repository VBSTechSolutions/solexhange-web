import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FaSearch } from "react-icons/fa"; // React Icons for search icon
import Navbar from "../Navbar/Navbar";

function Sell() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="container ">
        {/* Header Section */}

        {/* Main Content Section */}
        <div className=" mt-5">
          <div className="row">
            <div className="col-lg-2">

            </div>
            <div className="col-lg-6">
              <h5 className="fw-bold">Choose a product</h5>
              <p className="text-muted">
                Find the product you're looking for to continue
              </p>
              <div className="d-flex justify-content-center ">
            <div className="input-group  " >
              <span className="input-group-text bg-white">
                <FaSearch className="text-muted" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search for brand, color, etc."
              />
            </div>
          </div>
            </div>
            <div className="col-lg-4">

            </div>
          </div>
          {/* Search Bar */}
        
        </div>
      </div>
    </div>
  );
}

export default Sell;
