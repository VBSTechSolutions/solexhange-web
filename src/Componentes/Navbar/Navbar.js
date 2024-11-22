import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

import { images } from "../../Image/Allimage";
import axios from "axios";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // State to track which menu is open
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [searchapi, setSearchApi] = useState("");
  // const [filteredResults, setFilteredResults] = useState([]);
  
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  // const handleSearchChange = (event) => {
  //   const query = event.target.value;  
  //   if (query) {
  //     const results = searchapi.filter((item) =>
  //       item.name.toLowerCase().includes(query.toLowerCase())
  //     );
  //     setFilteredResults(results);
  //   } else {
  //     setFilteredResults([]);
  //   }
  // };
  
  // Update the screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992); // Adjust threshold based on your design needs
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(()=>{
axios
.get("https://sneakers-rough-frost-7777.fly.dev/search")
.then((response)=>{
  setSearchApi(response.data);
  console.log("add a new data ", response);

})

.catch((error) => {
  console.error("Error fetching data:", error);})

  },[])

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchClick = () => {
    setIsOpens(true); // Open the search input
  };

  const handleCloseClick = () => {
    setIsOpens(false); // Close the search input
  };

  const toggleSubMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index); // Toggle open/close of submenus
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className={`navbar-custom ${isLargeScreen ? "large-screen" : ""}`}>
        <div className="btn-toggler-custom" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </div>
        <img src={images.logo} className="chakra-icon logo-custom" alt="" />

        <div className="search-container-custom">
          {/* Input Box */}
          <div className={`input-box-custom ${isOpens ? "open" : ""}`}>
            <input type="text" placeholder="Search..." />
            <span className="search-custom" onClick={handleSearchClick}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            {/* Close icon */}
            <i
              className="fa-solid fa-xmark close-icon-custom"
              onClick={handleCloseClick}
            ></i>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar-custom ${isOpen ? "open" : ""}`} id="sidebar">
        {/* Close button */}
        <div className="close-btn-custom" onClick={toggleSidebar}>
          <i className="fa fa-times"></i>
        </div>
        <ul>
          <li>
            <strong>Browse</strong>
          </li>
          {/* Toggleable Items */}
          <li>
            <NavLink to="#" onClick={() => toggleSubMenu(0)}>
              Brands{" "}
              <i
                className={
                  openMenu === 0
                    ? "fa-solid fa-chevron-left"
                    : "fa fa-angle-right"
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
                  openMenu === 1
                    ? "fa-solid fa-chevron-left"
                    : "fa fa-angle-right"
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
          <li>
            <NavLink to="#" onClick={() => toggleSubMenu(2)}>
              Shoes{" "}
              <i
                className={
                  openMenu === 2
                    ? "fa-solid fa-chevron-left"
                    : "fa fa-angle-right"
                }
              ></i>
            </NavLink>
            {openMenu === 2 && (
              <ul>
                <li>
                  <Link to="#">Running</Link>
                </li>
                <li>
                  <Link to="#">Casual</Link>
                </li>
                <li>
                  <Link to="#">Formal</Link>
                </li>
              </ul>
            )}
          </li>
          {/* Add other categories with submenus if needed */}
          <hr />
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <li>
            <NavLink to="#">How It Works</NavLink>
          </li>
          <li>
            <NavLink to="#">New Releases</NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar for large screens */}
      {isLargeScreen && (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid pe-5 pt-3 pb-3">
            <NavLink className="navbar-brand" to="#">
              <img src={images.logo} className="chakra-icon" alt="" />
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
                <i className="fas fa-times fs-2"></i> // Close (X) icon when open
              ) : (
                <span className="navbar-toggler-icon"></span> // Hamburger icon when closed
              )}
            </button>

            <div
              className={`collapse navbar-collapse ${
                isNavbarOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              {/* Search Bar */}
              <form className="d-flex mx-auto align-items-center fromwidth pe-3 ">
                <i className="fa-solid fa-magnifying-glass position-absolute ms-3 text-secondary"></i>
                <input
                  className="form-control  ps-5"
                  type="search"
                  placeholder="Search for brand, color, etc."
                  aria-label="Search"
                />
              </form>

              {/* Navbar Links */}
              <ul className="navbar-nav ms-auto  gaps align-items-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    News
                  </NavLink>
                </li>
                <NavLink className="text-decoration-none text-dark" to="/about">
                  <li>About</li>
                </NavLink>
                <NavLink to="/Help" className="text-decoration-none text-dark">
                  <li>Help</li>
                </NavLink>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Sell
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <i className="fas fa-bell"></i>
                  </NavLink>
                </li>
                <NavLink to="/Login">  <li className="nav-item" >
                  <button
                    className="btn btn-signup text-nowrap" 
                    style={{ backgroundColor: "#333", color: "#fff" }}
                  >
                    Login
                  </button>
                </li></NavLink>
               <NavLink to="/SingUpFrom">  <li className="nav-item" >
                  <button
                    className="btn btn-signup text-nowrap" 
                    style={{ backgroundColor: "#333", color: "#fff" }}
                  >
                    Sign Up
                  </button>
                </li></NavLink>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
