import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Card/Card.css";
import { NavLink } from "react-router-dom";
function Cardpass() {
  const [alldata, setAlldata] = useState([]);
  const itemData = useSelector((state) => state.iteamPass || []);
  useEffect(() => {
    const storedData = localStorage.getItem("iteamdata");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        const uniqueData = [...new Map(parsedData.map(item => [item.name, item])).values()];
        setAlldata(uniqueData);
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }, [itemData]);
  return (
    <div className="container">
      <h5 className="ms-1">
        Recently Viewed <i className="fa-regular fa-circle-question"></i>
      </h5>
      <div className="scroll-container">
        {alldata.length > 0 ? (
          alldata.map((item, index) => (
            <div className="col-md-2" key={index}>
              <NavLink
                to={`/cartadd/${item.name}`} // Same URL pattern for consistency
                className="cards"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <div className="d-flex justify-content-end pe-2">
                  <i className="fa-regular fa-heart pb-0"></i>
                </div>
                <img
                  height="75px"
                  width="145px"
                  className="img-card"
                  src={item.img}
                  alt={item.name}
                  style={{ objectFit: "scale-down" }}
                />
                <div className="card-body">
                  <h6 className="card-title mt-1">{item.name}</h6>
                  <h6 className="card-text mt-1">Lowest Ask</h6>
                  <h6 className="price">${item.lowest_bid}</h6>
                  <p className="btn-btn rounded">
                    Last Sale: ${item.highest}
                  </p>
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