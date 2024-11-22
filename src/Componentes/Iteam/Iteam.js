import React, { useState, useEffect } from "react";
import "./Iteam.css";
import axios from "axios";
function Iteam() {
  const [Brand, setBrand] = useState([]);
  useEffect(() => {
    axios.get("https://sneakers-rough-frost-7777.fly.dev/brands")
      .then((response) => {
        console.log(response.data);
        setBrand(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brand data:", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-light d-flex justify-content-center">
        <div class="scroll-container">
        <span className="text-decoration-none">Brands</span>
         

             <ul class="dropdown-menu ">
             {
            Brand.map((BrandItem)=>(
               <li className="dropdown-item">
                   {BrandItem.attributes.name}
               </li>
                        ))
                      }
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
