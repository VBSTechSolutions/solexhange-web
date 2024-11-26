import React, { useState, useEffect } from "react";
import "./BuySell.css";
import { gsap } from "gsap";
import { imager } from "../../AboutImage/Allimage"; // Import the images as an array or adjust as per your setup

function BuySell() {
  const imageArray = [
    imager.Shoes4,
    imager.Shoes1,
    imager.Shoes2,
    imager.Shoes3,
  ]; // Add more images as needed
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Apply GSAP animation for rotating text
    gsap.set(".circles__text", { transformOrigin: "50% 50%" });
    gsap.to(".circles__text", {
      duration: 10,
      ease: "none",
      rotation: "+=360",
      repeat: -1,
    });

    // Set interval to change image every 4 seconds
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="container-fluid ">
        <div className="allarecenter">
          <svg
            className="circles"
            width="60vmin"
            height="60vmin"
            viewBox="0 0 1400 1400"
          >
            <defs>
              <path
                id="circle-1"
                d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
              />
            </defs>

            <text className="circles__text circles__text--1">
              <textPath href="#circle-1" aria-label="" textLength="2750" className="greencolor">
                HOW IT WORK HOW IT WORK
              </textPath>
            </text>

            {/* Display the active image */}
            <image
              href={imageArray[activeImageIndex]} // Use active image based on current index
              width="60%"
              height="70%"
              className="custom-icon"
              x="250"
              y="200"
            />
          </svg>
        </div>
        <div className="row postionarea">
          <div className="col-lg-6 py-5 white  col-md-6 buy">
            <div>
              <h2 className="text-success">Buy</h2>
            </div>
            <div>
              <div>
                <span className="drak onetow">1</span>
              </div>
            </div>
            <div>
              <p className="min">Place A Bid Or Buy Now</p>
            </div>
            <div>
              <h2>
                <i class="fa-solid fa-arrow-down-long"></i>
              </h2>
            </div>

            <div>
              <div>
                <span className="drak onetow">2</span>
              </div>
            </div>
            <div>
              <p className="min">Sole Change Verification</p>
            </div>
            <div>
              <h2>
                <i class="fa-solid fa-arrow-down-long"></i>
              </h2>
            </div>
            <div>
              <p className="min">We Ship To You</p>
            </div>
          </div>
          <div className="col-lg-6 py-5  col-md-6 buy bg-dark text-white">
            <div>
              <h2 className="text-success">Sell</h2>
            </div>
            <div>
              <div>
                <span className="onetow">1</span>
              </div>
            </div>
            <div>
              <p className="min">Place An Ask Or Sell Now</p>
            </div>
            <div>
              <h2>
                <i class="fa-solid fa-arrow-down-long"></i>
              </h2>
            </div>

            <div>
              <div>
                <span className="onetow">2</span>
              </div>
            </div>
            <div>
              <p className="min">Ship Us Your Sold Item</p>
            </div>
            <div>
              <h2>
                <i class="fa-solid fa-arrow-down-long"></i>
              </h2>
            </div>
            <div>
              <p className="min">We Verify & You Get Paid</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuySell;
