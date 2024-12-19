import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Card/Card.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Cartadd() {
  const { name } = useParams();
  const [alldata, setAlldata] = useState([]);
  const [frameNumber, setFrameNumber] = useState(1);
  const [imageWidth, setImageWidth] = useState(0);
  const itemData = useSelector((state) => state.iteamPass || []);
  useEffect(() => {
    if (itemData.length > 0) {
      localStorage.setItem("iteamdata", JSON.stringify(itemData));
    }
    const storedData = localStorage.getItem("iteamdata");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const filteredData = parsedData.filter((item, index, self) => {
        return (
          item.name === name &&
          self.findIndex((i) => i.name === item.name) === index
        );
      });
      setAlldata(filteredData);
    }
  }, [itemData, name]);
  const handleRangeChange = (event) => {
    const newFrameNumber = parseInt(event.target.value, 10);
    setFrameNumber(newFrameNumber);
  };
  const getCurrentImageUrl = () => {
    if (alldata.length > 0 && alldata[0].photo) {
      const selectedPhoto = alldata[0].photo[frameNumber - 1];
      return selectedPhoto ? selectedPhoto.url : "";
    }
    return "";
  };
  const handleMouseMove = (event) => {
    if (!imageWidth) return; // Prevent calculations before image width is set
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Mouse position relative to the image
    const newFrameNumber = Math.ceil((mouseX / imageWidth) * 36); // Calculate frame number (1-36)
    setFrameNumber(newFrameNumber > 36 ? 36 : newFrameNumber); // Clamp value to 36
  };
  const handleImageLoad = (event) => {
    // Get the width of the image for proper calculations
    setImageWidth(event.target.offsetWidth);
  };
  return (
    <div>
    <Navbar/>
      <div className="colortext container">
        <h5 className="ms-3">
          Recently Viewed <i className="fa-regular fa-circle-question"></i>
        </h5>
        <div className="container">
          {alldata.length > 0 ? (
            alldata.map((item, index) => (
              <div key={index}>
                <h6 className="card-title-addcart mt-1">{item.name}</h6>
                <div className="row">
                  <div className="col-lg-6 position-relative">
                    <div className="img-container">
                      <img
                        id="myImg"
                        className="img-card"
                        src={getCurrentImageUrl()}
                        alt="..."
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          cursor: "e-resize", // Change cursor style
                          transition: "transform 0.2s", // Smooth rotation effect
                        }}
                        onLoad={handleImageLoad}
                        onMouseMove={handleMouseMove} // Rotate on mouse move
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 p-5">
                    <div
                      className="border"
                      style={{ borderRadius: "0.5rem" }}
                    >
                      <div className="d-flex justify-content-between align-middle py-2 px-4">
                        <h6 className="">Size :</h6>
                        <h6 className="">
                          All <i className="fa-solid fa-angle-down"></i>
                        </h6>
                      </div>
                    </div>
                    <div
                      className="border p-4 mt-3"
                      style={{ borderRadius: "0.5rem" }}
                    >
                      <div className="d-flex justify-content-between aligriteam">
                        <div>
                          <h6 className="price mt-1">Buy Now for</h6>
                          <h6 className="price">${item.highest}</h6>
                        </div>
                        <div>
                          <h6>
                            <b>261 Sold in Last 3 Days!</b>
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <button
                            type="button"
                            className="btn border border-1 mt-3 p-2"
                            style={{ width: "100%", borderRadius: "1rem" }}
                          >
                            Place Bid
                          </button>
                        </div>
                        <div className="col-lg-6">
                          <button
                            type="button"
                            className="btn border border-1 mt-3 p-2 btncolor"
                            style={{ width: "100%" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                      <div className="mt-3">
                        <hr />
                      </div>
                      <div className="d-flex justify-content-between aligriteam">
                        <div>
                          <span className="mt-1 fs-3">Sale :</span>
                          <span className="price">${item.lowest_bid}</span>
                        </div>
                        <div>
                          <h6 className="text-decoration-underline underlinees">
                            <b>View Market Data</b>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in cart</p>
          )}
          <div className="mt-3">
            <label>Choose Image:</label>
            <input
              id="range-input"
              type="range"
              min="1"
              max="36"
              value={frameNumber}
              onChange={handleRangeChange}
            />
          </div>
        </div>
        <Card name="akash " />
        <div className="container">
          <hr />
          <h3>Product Details</h3>
          <div>
            <div className="row aligriteam text-nowrap mt-2">
              <div className="col-lg-2 text-start">
                <h6>Style</h6>
                <h6>Colorway</h6>
                <h6>Retail Price</h6>
                <h6>Release Date</h6>
              </div>
              <div className="col-lg-2 text-start">
                <h6>DC0774-021</h6>
                <h6>Archaeo Brown/Black/Sail</h6>
                <h6>$115</h6>
                <h6>06/01/2024</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Cartadd;