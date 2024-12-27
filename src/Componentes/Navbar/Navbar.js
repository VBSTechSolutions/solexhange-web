import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { images } from "../../Image/Allimage";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // State to track which menu is open
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const [searchQuery, setSearchQuery] = useState("");
  const [hideLogo, setHideLogo] = useState(false); // State to manage logo visibility
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992); // Adjust threshold based on your design needs
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleSearchClick = () => {
    setIsOpens(true); // Open the search input
    setHideLogo(true); // Hide the logo
    // Adjust styles dynamically
    const searchContainer = document.querySelector(".search-container-custom");
    const navbar = document.querySelector(".navbar-custom");
    if (searchContainer) {
      searchContainer.style.width = "100%"; // Expand to 100%
    }
    if (navbar) {
      navbar.style.justifyContent = "flex-start"; // Align content to the left
    }
  };
  const handleCloseClick = () => {
    setIsOpens(false); // Close the search input
    setHideLogo(false); // Show the logo
    // Reset styles dynamically
    const searchContainer = document.querySelector(".search-container-custom");
    const navbar = document.querySelector(".navbar-custom");
    if (searchContainer) {
      searchContainer.style.width = "";
    }
    if (navbar) {
      navbar.style.justifyContent = "";
    }
  };
  const toggleSubMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/sneaker-products?s=${encodeURIComponent(searchQuery)}`);
    }
  };
  const navbar = document.getElementsByClassName("navbar-custom");
  return (
    <div className="main-container">
      <div className={`navbar-custom ${isLargeScreen ? "large-screen" : ""}`}>
        <div className="btn-toggler-custom" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </div>
        {!hideLogo && (
          <NavLink to="/">
            <img
              src={images.logo}
              className="chakra-icon logo-custom"
              alt="Logo"
            />
          </NavLink>
        )}
        <div className="search-container-custom">
          <div className={`input-box-custom ${isOpens ? "open" : ""}`}>
            <input
              className="form-control ps-5"
              type="search"
              placeholder="Search for brand, color, etc."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="search-custom" onClick={handleSearchClick}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <i
              className="fa-solid fa-xmark close-icon-custom"
              onClick={handleCloseClick}
            ></i>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className={`sidebar-custom ${isOpen ? "open" : ""}`} id="sidebar">
        <div className="close-btn-custom" onClick={toggleSidebar}>
          <i className="fa fa-times"></i>
        </div>
        <ul>
          <li>
            <strong>Browse</strong>
          </li>
          <li>
            <NavLink to="#" onClick={() => toggleSubMenu(0)}>
              Brands{" "}
              <i
                className={
                  openMenu === 0 ? "fa fa-chevron-down" : "fa fa-chevron-right"
                }
              ></i>
            </NavLink>
            {openMenu === 0 && (
              <ul>
                <li>
                  <Link to="#">Nike</Link>
                </li>
                <li>
                  <Link to="#">Adidas</Link>
                </li>
                <li>
                  <Link to="#">Puma</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="#" onClick={() => toggleSubMenu(1)}>
              Sneakers{" "}
              <i
                className={
                  openMenu === 1 ? "fa fa-chevron-down" : "fa fa-chevron-right"
                }
              ></i>
            </NavLink>
            {openMenu === 1 && (
              <ul>
                <li>
                  <Link to="#">Air Max</Link>
                </li>
                <li>
                  <Link to="#">Superstars</Link>
                </li>
                <li>
                  <Link to="#">Yeezy</Link>
                </li>
              </ul>
            )}
          </li>
          <hr />
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works">How It Works</NavLink>
          </li>
          <li>
            <NavLink to="/new-releases">New Releases</NavLink>
          </li>
        </ul>
      </div>
      {/* Navbar for large screens */}
      {isLargeScreen && (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid pe-5 pt-3 pb-3">
            <NavLink className="navbar-brand" to="/">
              <img src={images.logo} className="chakra-icon" alt="Logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isNavbarOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              {isNavbarOpen ? (
                <i className="fas fa-times fs-2"></i>
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
            <div
              className={`collapse navbar-collapse ${
                isNavbarOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              <form
                onSubmit={handleSearchSubmit}
                className="d-flex align-items-center form-details"
              >
                <button type="submit" className="btn position-absolute ">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="search"
                  placeholder="Search for brand, color, etc."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control top-search-input  ps-5"
                />
              </form>
              <ul className="navbar-nav   gaps align-items-center">
                <NavLink to="/News" className="text-decoration-none text-dark">
                  <li>News</li>
                </NavLink>
                <NavLink className="text-decoration-none text-dark" to="/about">
                  <li>About</li>
                </NavLink>
                <NavLink to="/Help" className="text-decoration-none text-dark">
                  <li>Help</li>
                </NavLink>
                <NavLink to="/Sell" className="text-decoration-none text-dark">
                  <li>Sell</li>
                </NavLink>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <i className="fas fa-bell"></i>
                  </NavLink>
                </li>
                <NavLink to="/Login">
                  <li className="nav-item">
                    <button
                      className="btn btn-signup text-nowrap px-3"
                      style={{  color: "#black" , borderRadius :"1.2rem " ,  border: "1px solid black" }}
                    >
                      Login
                    </button>
                  </li>
                </NavLink>
                <NavLink to="/SingUpFrom">
                  <li className="nav-item">
                    <button
                      className="btn btn-signup text-nowrap px-3"
                      style={{ backgroundColor: "#333", color: "#fff" , borderRadius :"1.2rem" }}
                    >
                      Sign Up
                    </button>
                  </li>
                </NavLink>
               
              </ul>
              {/* <NavLink to="/verify-otp">
                  <li className="nav-item" style={{listStyle : "none"}}>
                    <button
                      className="btn btn-signup text-nowrap "
                      style={{ borderRadius: "1.2rem" }}
                    >
                      <img
                        src={images.logout}
                        alt="Logout"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </button>
                  </li>
                </NavLink> */}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
export default Navbar;
