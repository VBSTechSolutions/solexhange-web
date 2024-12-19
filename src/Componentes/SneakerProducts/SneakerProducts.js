import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Iteam from "../Iteam/Iteam";
import "./SneakerProducts.css"

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
      filteredProducts.map((product) => {
        const sizeData = product.attributes.sizes && product.attributes.sizes[0]; // Access the first element
        const lowestBid = sizeData ? sizeData.lowest_bid : "N/A";

        return (
          <div className="col-md-3" key={product.id}>
            <div className="d-flex justify-content-end pe-2">
              <i className="fa-regular fa-heart pb-0"></i>
            </div>
            <div className="d-flex justify-content-center">
              <img
                className="ProductImage"
                src={product.attributes?.image?.url || "placeholder.jpg"}
                alt={product.attributes?.name || "Product Image"}
              />
            </div>
            <p className="m-0 Sportswear">
              {product.attributes?.brand} Sportswear Tech Fleece Zip
              Windrunner Reflective Full
            </p>
            <h6 className="LowestAsk">Lowest Ask</h6>
            <p className="m-0">
              <strong>
                <i className="fa-solid fa-dollar-sign"></i> {lowestBid}
              </strong>
            </p>
          </div>
        );
      })
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
