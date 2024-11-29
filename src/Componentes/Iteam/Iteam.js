import React, { useState, useEffect } from "react";
import "./Iteam.css";
import axios from "axios";
import { Link} from "react-router-dom";

function Iteam() {
  const [Brand, setBrand] = useState([]);
  const [searchQuery,setSearchQuery] = useState('')
  useEffect(() => {
    axios.get("https://sneakers-rough-frost-7777.fly.dev/brands")
      .then((response) => {
        console.log("asdfghjk",response.data);
        setBrand(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brand data:", error);
      });
  }, []);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }
const filteredBrand = Brand.filter((BrandName)=>{
  return(
BrandName.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
});
console.log("hjjs",filteredBrand)
  return (
    <div>
      <div className="bg-light d-flex justify-content-center">
        <div class="scroll-container">
        <span className="text-decoration-none">Brands</span>
         

        <ul className="dropdown-menu scroll-container h-50">
  <div style={{ padding: '10px' }}>
    <input
      type="text"
      placeholder="Search by name..."
      value={searchQuery}
      onChange={handleSearchChange}
      style={{
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '300px',
      }}
    />
  </div>
  {filteredBrand.length > 0 ? (
    filteredBrand.map((BrandItem) => (
      <p className="dropdown-item col-1" key={BrandItem.id}>
        <Link className="text-decoration-none" to="#">
          {BrandItem.attributes.name}
        </Link>
      </p>
    ))
  ) : (
    <p>No products match your search criteria.</p>
  )}
</ul>
   
            
            
        
       
          <span className="text-decoration-none">Deals</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          
          <span className="text-decoration-none">New</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          
          <span className="text-decoration-none">Men</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          <span className="text-decoration-none">Women</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>{" "}
          <span className="text-decoration-none">Kids</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          <span className="text-decoration-none">Sneakers</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          <span className="text-decoration-none">Shoes</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          <span className="text-decoration-none"> Accessories</span>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          <span className="text-nowrap">More Categories</span>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        
       
      </div>
    </div>
  );
}

export default Iteam;
