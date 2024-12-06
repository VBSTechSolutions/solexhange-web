import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Iteam from "../Iteam/Iteam";

function SneakerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("s") || "";

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetching products for query:", searchQuery); // Debug
      setLoading(true);
      try {
        const response = await axios.get(
          `https://sneakers-rough-frost-7777.fly.dev/search?s=${searchQuery}`
        );
        console.log("API Response:", response.data); // Debug
        setProducts(response.data.data || []);
      } catch (err) {
        console.error("API Error:", err); // Debug
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, [searchQuery]); // Dependency for re-fetching
  

  const filteredProducts = products.filter((product) =>
    product.attributes?.brand
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <Iteam />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 p-4">
            <div className="filter-sidebar">
              <div className="toggle">
                <label>
                  <input type="checkbox" />
                  <span className="label">🚀 Xpress Ship</span>
                </label>
              </div>
              <div className="toggle">
                <label>
                  <input type="checkbox" />
                  <span className="label">Available Now</span>
                </label>
              </div>

              {/* Dropdown Example */}
              {["Category", "Brands", "Gender", "Color", "Activity"].map(
                (dropdownName) => (
                  <div className="dropdown" key={dropdownName}>
                    <hr />
                    <div
                      className="dropdown-header"
                      onClick={() => toggleDropdown(dropdownName)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <h3>{dropdownName}</h3>
                      <i
                        className={`fa ${
                          openDropdowns[dropdownName]
                            ? "fa-caret-up"
                            : "fa-caret-down"
                        }`}
                        style={{ fontSize: "18px" }}
                      ></i>
                    </div>
                    {openDropdowns[dropdownName] && (
                      <ul
                        className="dropdown-items"
                        style={{
                          marginTop: "10px",
                          listStyle: "none",
                          padding: 0,
                        }}
                      >
                        <li>{`${dropdownName} Option 1`}</li>
                        <li>{`${dropdownName} Option 2`}</li>
                        <li>{`${dropdownName} Option 3`}</li>
                      </ul>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="col-lg-9">
            <h2>Sneaker Products</h2>
            <p>Search Results for: "{searchQuery}"</p>
            <div>
              <div>
                <div className="row">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div className="col-md-4" key={product.id}>
                        <img
                          src={product.attributes?.image?.url || "placeholder.jpg"}
                          alt={product.attributes?.name || "Product Image"}
                          style={{
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <h6>
                          <strong>{product.attributes?.name}</strong>
                        </h6>
                        <p className="m-0">
                          <strong>Brand:</strong> {product.attributes?.brand}
                        </p>
                        <p className="m-0">
                          <strong>City:</strong> {product.attributes?.city}
                        </p>
                        <p className="m-0">
                          <strong>Colorway:</strong>{" "}
                          {product.attributes?.colorway}
                        </p>
                        <p className="m-0">
                          <strong>Release Year:</strong>{" "}
                          {product.attributes?.release_year}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No products match your search criteria.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SneakerProducts;
