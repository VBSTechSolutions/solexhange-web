import React, { useState, useEffect } from "react";
import "./Card.css";
import { images } from "../../Image/Allimage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Reducer/reducer";
import { NavLink } from "react-router-dom";

function Card(props) {
  const [cardsData, setCardsData] = useState([]);
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.iteamPass || []);

  useEffect(() => {
    axios
      .get("https://sneakers-rough-frost-7777.fly.dev/products")
      .then((response) => {
        setCardsData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCardClick = (dats) => {
    const sizeData = dats.attributes.sizes && dats.attributes.sizes[0];
    const lowestBid = sizeData ? sizeData.lowest_bid : null;
    const highestBid = sizeData ? sizeData.highest_bid : null;
  
    const newItem = {
      img: dats.attributes.image.url || images.Shoes[0],
      name: dats.attributes.name,
      highest: highestBid,
      lowest_bid: lowestBid,
    };
  
    // Check if the item is already in Redux state or localStorage
    const isItemInRedux = itemData.some((item) => item.name === newItem.name);
  
    const storedData = localStorage.getItem("iteamdata");
    const parsedStoredData = storedData ? JSON.parse(storedData) : [];
    const isItemInLocalStorage = parsedStoredData.some((item) => item.name === newItem.name);
  
    if (!isItemInRedux) {
      // Dispatch to Redux only if the item is not already in state
      dispatch(addData(newItem));
    }
  
    if (!isItemInLocalStorage) {
      // Save to localStorage only if the item is not already present
      const updatedLocalStorageData = [...parsedStoredData, newItem];
      localStorage.setItem("iteamdata", JSON.stringify(updatedLocalStorageData));
    }
  };
  

  return (
    <div className="container">
      <h5>
        {props.name ?? "Recommended For You "} <i className="fa-regular fa-circle-question"></i>
      </h5>
      <div className="scroll-container">
        {Array.isArray(cardsData) && cardsData.length > 0 ? (
          cardsData.map((dats, index) => {
            const sizeData = dats.attributes.sizes && dats.attributes.sizes[0];
            const lowestBid = sizeData ? sizeData.lowest_bid : "N/A";
            const highestBid = sizeData ? sizeData.highest_bid : "N/A";

            return (
              <div className="col-md-2" key={index}>
                <NavLink
                  to={`/cartadd/${dats.attributes.name}`}  // Pass the name as a route parameter
                  className="cards"
                  onClick={() => handleCardClick(dats)}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <div className="d-flex justify-content-end pe-2">
                    <i className="fa-regular fa-heart pb-0"></i>
                  </div>
                  <img
                    height="75px"
                    width="145px"
                    className="img-card"
                    src={dats.attributes.image.url || images.Shoes}
                    alt="..."
                    style={{ objectFit: "scale-down" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title mt-1">{dats.attributes.name}</h6>
                    <h6 className="card-text mt-1">Lowest Ask</h6>
                    <h6 className="price">${lowestBid}</h6>
                    <p className="btn-btn rounded">
                      Last Sale: ${highestBid}
                    </p>
                  </div>
                </NavLink>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Card;
