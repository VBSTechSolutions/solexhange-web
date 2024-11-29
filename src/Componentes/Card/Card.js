import React, { useState, useEffect } from "react";
import "./Card.css";
import { images } from "../../Image/Allimage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addData } from "../Reducer/reducer";
import { NavLink } from "react-router-dom";

function Card(props) {
  const [cardsData, setCardsData] = useState([]);
  const dispatch = useDispatch();

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

  return (
    <div className="container">
      <h5>
        {props.name ?? "Recommended For You"}{" "}
        <i className="fa-regular fa-circle-question"></i>
      </h5>
      <div className="scroll-container">
        {Array.isArray(cardsData) && cardsData.length > 0 ? (
          cardsData.map((dats, index) => (
            <div className="col-md-2" key={index}>
              <NavLink
                to="/cartadd"
                className="cards"
                onClick={() =>
                  dispatch(
                    addData({
                      img: dats.attributes.image.url || images.Shoes[0],
                      name: dats.attributes.name,
                      highest: dats.attributes.sizes
                        ? dats.attributes.sizes[0].highest_bid
                        : "N/A",
                      lowest_bid: dats.attributes.sizes
                        ? dats.attributes.sizes[0].lowest_bid
                        : "N/A",
                    })
                  )
                }
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
                  alt={dats.attributes.name}
                  style={{ objectFit: "scale-down" }}
                />
                <div className="card-body">
                  <h6 className="card-title mt-1">{dats.attributes.name}</h6>
                  <h6 className="card-text mt-1">Lowest Ask</h6>
                  <p><strong>Release Year:</strong> {dats.attributes.release_year}</p>

                  {dats.attributes.sizes && dats.attributes.sizes.length > 0 ? (
                    <h6 className="price">${dats.attributes.sizes[0].lowest_bid}</h6>
                  ) : (
                    <h6 className="price">No sizes available</h6>
                  )}
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Card;
