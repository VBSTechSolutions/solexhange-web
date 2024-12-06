import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Card/Card.css";
import { NavLink } from "react-router-dom";

function Cardpass() {
  const [alldata, setAlldata] = useState([]);
  const itemData = useSelector((state) => state.iteamPass || []);  // Access the cart slice properly

  useEffect(() => {
    // Retrieve unique items from localStorage
    const storedData = localStorage.getItem("iteamdata");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const uniqueData = [...new Map(parsedData.map(item => [item.name, item])).values()];
      setAlldata(uniqueData);
    }
  }, [itemData]);
  
  return (
    <div className="container">
      <h5 className="ms-1">
        Recently Viewedw <i className="fa-regular fa-circle-question"></i>
      </h5>
      <div className="scroll-container">
        {alldata.length > 0 ? (
          alldata.map((item, index) => (
            <div className="col-md-2" key={index}>
              <NavLink to="/cartadd" className="cards">
                <div className="d-flex justify-content-end pe-2">
                  <i className="fa-regular fa-heart pb-0"></i>
                </div>
                <img
                  height="75px"
                  width="145px"
                  className="img-card"
                  src={item.img}
                  alt="..."
                  style={{ objectFit: "scale-down" }}
                />
                <div className="card-body">
                  <h6 className="card-title mt-1 ">{item.name}</h6>
                  <h6 className="card-text mt-1">Lowest Ask</h6>
                  <h6 className="price">${item.highest}</h6>
                  <a href="#" className="btn-btn rounded">
                    Last Sale: ${item.lowest_bid}
                  </a>
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  );
}

export default Cardpass;
